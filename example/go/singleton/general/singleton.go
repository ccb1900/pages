package general

type Singleton struct {
}

var instance *Singleton

func GetInstance() *Singleton {
	if instance == nil {
		instance = new(Singleton)
	}

	return instance
}
