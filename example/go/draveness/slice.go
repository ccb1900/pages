package draveness

import "fmt"

func slice_init() {
	// 切片
	a := []int{1, 2, 3, 4}
	// 数组
	x := [4]int{1, 2, 3, 4}
	y := [...]int{1, 2, 3, 4}
	// 切片
	b := a[:2]
	c := x[:2]
	m := make([]int, 2)
	//m = append(m, 1)
	fmt.Println(a, b, x, y, c, m)
}
