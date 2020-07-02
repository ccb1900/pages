package mutex

import "sync"

type Singleton struct {
	
}

var instance *Singleton
var lock sync.Mutex

func GetInstance() *Singleton {
	lock.Lock()
	if instance ==nil {
		instance = new(Singleton)
	}
	lock.Unlock()

	return instance
}