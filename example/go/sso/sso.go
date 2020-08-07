package sso

import (
	"itiswho.com/example/sso/client1"
	"itiswho.com/example/sso/client2"
	"itiswho.com/example/sso/server"
	"sync"
)

func Server() {
	var wg sync.WaitGroup
	wg.Add(3)
	go func() {
		//wg.Done()
		server.Server()
	}()
	go func() {
		//wg.Done()
		client1.Server()
	}()
	go func() {
		//wg.Done()
		client2.Server()
	}()
	wg.Wait()
}
