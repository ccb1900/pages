package osenv

import (
	"fmt"
	"os"
	"strings"
)

func OsEnv() {
	err := os.Setenv("NAME", "CCB")

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("NAME::", os.Getenv("NAME"))

	for _, e := range os.Environ() {
		pair := strings.Split(e, "=")
		fmt.Println(pair)
	}

}
