package special

import (
	"fmt"
	"sync"
)

type Singleton struct {

}

var instance *Singleton
var once sync.Once
func GetInstance() *Singleton {
	// 仅执行一次
	once.Do(func() {
		fmt.Println("once")
		instance = new(Singleton)
	})

	return instance
}