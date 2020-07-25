package e2

import "sync"

func Handle()  {
	//ch := make(chan int)
	//
	//ch <- 10
	//println(<-ch)
	//ch <- 20
	//println(<-ch)
	//ch <- 30
	//println(<-ch)
	var mutex sync.Mutex
	//mutex.Lock()
	defer mutex.Unlock()


}
