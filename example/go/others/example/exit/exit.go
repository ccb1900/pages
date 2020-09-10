package exit

import (
	"fmt"
	"os"
)

func test() {
	defer fmt.Println("test defer")
}
func Exit() {
	defer fmt.Println("exit defer")
	test()
	// 如此退出，defer永远不会执行，此时的退出状态可以被终端检测到
	// test 函数 defer的执行不受影响
	os.Exit(3)
}
