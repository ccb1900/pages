package contexts

import (
	"fmt"
	"net/http"
	"time"
)

func Contexts() {
	http.HandleFunc("/hello", func(writer http.ResponseWriter, request *http.Request) {
		ctx := request.Context()
		fmt.Println("server:hello::start")
		defer fmt.Println("server:hello:stop")

		select {
		case <-time.After(10 * time.Second):
			_, err := fmt.Fprintf(writer, "hello\n")

			if err != nil {
				fmt.Println("server error")
			}
		case <-ctx.Done():
			err := ctx.Err()
			fmt.Println("error::", err)
			http.Error(writer, err.Error(), http.StatusInternalServerError)
		}
	})

	err := http.ListenAndServe(":8092", nil)
	if err != nil {
		fmt.Println("start err::", err)
	}
}
