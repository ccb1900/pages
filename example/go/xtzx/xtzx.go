package xtzx

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
)

type Meta struct {
	Link   string `json:"link"`
	Title  string `json:"title"`
	Second string `json:"second"`
	Third  string `json:"third"`
	Index  int    `json:"index"`
}

func Save() {
	//var wg sync.WaitGroup
	var metas []Meta
	data, err := ioutil.ReadFile("./xtzx.json")
	if err != nil {
		panic(err)
	}
	_ = json.Unmarshal(data, &metas)

	//wg.Add(len(metas))

	for i := 0; i < len(metas); i++ {
		//go func(i int,meta Meta) {
		//	Download(meta)
		//	fmt.Println("over::"+strconv.Itoa(meta.Index))
		//	wg.Done()
		//}(i,metas[i])
		Download(metas[i])
		fmt.Println("over::" + strconv.Itoa(metas[i].Index))
		//wg.Done()
	}

	//wg.Wait()
}

func Download(meta Meta) {
	//url := "http://ws.cdn.xuetangx.com/4e9f955a2cee7ca2-10.mp4?wsSecret=b3fc577fb523e6bd36c16c4b5210f7c5&wsTime=1596444993"

	resp, err := http.Get(meta.Link)

	if err != nil {
		panic(err)
	}
	defer func() {
		err := resp.Body.Close()

		log.Println("close::", err)
	}()

	name := strconv.Itoa(meta.Index) + "_" + meta.Title + "_" + meta.Second + "_" + meta.Third + ".mp4"

	path := "/Users/ccb/Movies/学堂在线/清华操作系统/" + strings.Join(strings.Split(name, "/"), "")
	f, _ := os.Create(path)

	defer func() {
		_ = f.Close()
	}()

	_, err = io.Copy(f, resp.Body)

	if err != nil {
		fmt.Println(1002, err)
	}
}
