package main

import (
	"itiswho.com/example/concurrent/e2"
)

func init()  {
	println("main init")
}
func main() {
	e2.Handle()
}
