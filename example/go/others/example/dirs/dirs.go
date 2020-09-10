package dirs

import (
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
)

func Dirs() {
	name := "ttttt/etet/3/4"

	CreateDir(name)

	//ReadDir(".")

	CreateFile("test.txt")
	CreateFile("test.txt")
	CreateFile("ttttt")

	err := filepath.Walk("/", func(path string, info os.FileInfo, err error) error {
		fmt.Println("file walk::", path, info.Name(), err)
		return nil
	})

	if err != nil {
		fmt.Println(err)
	}
}

// 会覆盖已有的函数
func CreateFile(name string) {
	file, err := os.Create(name)
	if err != nil {
		fmt.Println("CreateFile", err)
	}

	defer func() {
		err := file.Close()
		if err != nil {
			fmt.Println(err)
		}
	}()
}
func CreateDir(name string) {
	err := os.MkdirAll(name, 0755)

	if err != nil {
		fmt.Println(err)
	}
}

func ReadDir(name string) {
	files, _ := ioutil.ReadDir(name)

	for i, file := range files {
		fmt.Println(i, file.Name())
		fmt.Println(i, file.ModTime().String())
		fmt.Println(i, "is dir::", file.IsDir())
	}
}
