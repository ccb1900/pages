package server

import (
	"bufio"
	"fmt"
	"log"
	"net"
)

type Server struct {
	port string
	clients map[int]Client
}

type Group struct {
	name string
	id int
	members map[int]Client
}
type Client struct {
	s *Server
	c net.Conn
	id int
	group Group
}

func (c *Client) sendToOne(target *Client,s string)  {
	target.write(s)
}

func (c *Client) sendToGroup()  {

}

func (c *Client) decode()  {

}
func (c *Client) write(s string)  {
	w:=bufio.NewWriter(c.c)

	_, err := w.WriteString(s)

	if err != nil {
		log.Fatalln("conn write failed \n",err)
	}

	err = w.Flush()

	if err != nil {
		log.Fatalln("conn flush failed \n",err)
	}
}

func (c *Client) handle()  {
	contents,err := bufio.NewReader(c.c).ReadString('\n')
	if err != nil {
		log.Fatalln("conn failed \n",err)
	}

	fmt.Println(contents)
}

func (s *Server) Run()  {
	ln,err := net.Listen("tcp",s.port)

	if err != nil {
		log.Fatalln("server start failed \n",err)
	}
	defer func() {
		err := ln.Close()
		if err != nil {
			log.Fatalln("server close failed \n",err)
		}
	}()

	fmt.Printf("start at %s\n",s.port)
	for  {
		fmt.Println(" waiting client to connect... ")
		conn,err := ln.Accept()

		if err != nil {
			log.Fatalln("conn failed \n",err)
		}

		fmt.Printf("client connected,%s\n",conn.RemoteAddr().String())

		client := new(Client)
		client.c = conn
		client.s = s
		go s.Handle(client)
	}
}

func (s *Server)Handle(c *Client)  {
	for  {
		c.handle()
	}
}

func New() *Server  {
	s := new(Server)
	s.port = ":10010"
	return s
}