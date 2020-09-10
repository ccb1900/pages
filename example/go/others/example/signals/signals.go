package signals

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"
)

func Signals() {
	sigs := make(chan os.Signal, 1)
	done := make(chan bool, 1)

	// 将收到的信号，传入到sigs
	signal.Notify(sigs, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		fmt.Println("goroutine signal")
		// 等待信号，阻塞在此，此时sigs是空的在等待信号
		sig := <-sigs
		fmt.Println("goroutine signal")

		fmt.Println()

		// 打印信号名称
		fmt.Println(sig)

		// 执行完成
		done <- true
	}()

	fmt.Println("awaiting signal")
	// 等待读取done中的元素，阻塞在此，直到done有元素
	<-done
	fmt.Println("exiting")
}
