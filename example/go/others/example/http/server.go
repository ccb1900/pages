package http

import (
	"fmt"
	"net/http"
)

func hello(w http.ResponseWriter, req *http.Request) {
	_, err := fmt.Fprintf(w, "hello\n")

	if err != nil {
		fmt.Println("hello err", err)
	}

}
func headers(w http.ResponseWriter, req *http.Request) {
	for name, headers := range req.Header {
		for _, h := range headers {
			_, err := fmt.Fprintf(w, "%v:%v\n", name, h)
			if err != nil {
				fmt.Println("hello err", err)
			}
		}
	}
}

func stop(w http.ResponseWriter, req *http.Request) {

}
func Server() {
	http.HandleFunc("/hello", hello)
	http.HandleFunc("/headers", headers)
	http.HandleFunc("/stop", stop)

	fmt.Println("server start...")
	err := http.ListenAndServe(":8090", nil)

	var server http.Server

	server.Addr = ":8090"

	if server.ListenAndServe() != nil {
		fmt.Println("server start err", err)
	}
}
