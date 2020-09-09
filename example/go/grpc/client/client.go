package client

import (
	"fmt"
	"itiswho.com/example/grpc/helloworld"
)

func Client() {
	hell := new(helloworld.HelloRequest)

	hell.Name = "ccb"

	reply := new(helloworld.HelloReply)

	reply.Message = "hello,name"

	fmt.Println(reply, hell)
}
