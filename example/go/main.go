package main

import (
	"fmt"
	"itiswho.com/example/utils"
)

func main() {
	fmt.Println(utils.Md5(utils.StrRand(12)))
}
