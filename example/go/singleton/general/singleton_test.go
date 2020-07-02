package general

import (
	"github.com/go-playground/assert/v2"
	"sync"
	"testing"
	"time"
)

func TestGetInstance(t *testing.T) {
	num := 100000
	var wg sync.WaitGroup
	wg.Add(num)
	var lock sync.Mutex
	s := make([]*Singleton,0)
	for i := 0;i<num;i++ {
		go func() {
			ss := GetInstance()
			time.Sleep(2*time.Second)
			lock.Lock()
			s = append(s,ss)
			lock.Unlock()
			wg.Done()
		}()
	}
	wg.Wait()
	for j:=0;j<num-1;j++ {
		assert.Equal(t,s[j],s[j+1])
	}

}
