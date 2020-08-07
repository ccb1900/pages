package others

import (
	"fmt"
	"strconv"
	"sync"
)

// 每个协程既是生产者又是消费者，交替打印。那么如果是多个元素交替打印呢？

type Test struct {
	c     *sync.Cond
	count int
	wg    sync.WaitGroup
	ch    chan int
}

// a 打印单数 检查count，
func (t *Test) Pp() {
	fmt.Println("just test")
}

// 条件变量
func (t *Test) Cond(status int) {
	for t.count < 10 {
		t.c.L.Lock()
		// 自旋
		for t.count%2 == status {
			// 释放锁进入阻塞状态（wait包含三个步骤，释放锁，阻塞，获取锁）
			t.c.Wait()
		}
		fmt.Println("A"+strconv.Itoa(status)+"::", t.count)
		t.count++
		// 通知另一个协程，已经处理完成，让另一个协程尝试获取锁
		t.c.Signal()
		// 释放锁
		t.c.L.Unlock()
	}
}

// channel 实现
func (t *Test) Chan(status int) {
	for t.count < 10 {
		if t.count%2 == status {
			select {
			case a := <-t.ch:
				fmt.Println("A"+strconv.Itoa(status)+"::", a)
				t.count++
				t.ch <- t.count
			default:
				fmt.Println("test::default", status)
			}
		}
	}
}

func New(count int) *Test {
	c := sync.NewCond(&sync.Mutex{})

	t := new(Test)

	t.count = count
	t.c = c
	t.ch = make(chan int, 1)
	t.ch <- 0
	return t
}
