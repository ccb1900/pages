package utils

import (
	"fmt"
	"testing"
)

func TestMd5(t *testing.T) {
	fmt.Println(Md5(StrRand(16)))
}

func TestRequest(t *testing.T) {
	//Request("http://baidu.com",nil,nil)
}

func TestStrRand(t *testing.T) {
	fmt.Println(StrRand(16))
}
