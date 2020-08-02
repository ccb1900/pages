package main

import (
	"fmt"
	"itiswho.com/example/xtzx"
)

func init()  {
	println("main init")
}
func main() {
	xtzx.Save()
	fmt.Println("over...")
}
