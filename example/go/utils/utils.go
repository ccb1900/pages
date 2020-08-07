package utils

import (
	"crypto/md5"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math/rand"
	"net/http"
	"time"
)

// 计算字符串的md5，输出16进制
func Md5(s string) string {
	m := md5.Sum([]byte(s))
	return hex.EncodeToString(m[:])
}

// http 请求
func Request(url string, params interface{}, response interface{}) {
	fmt.Println(url)
	resp, err := http.Get(url)
	if err != nil {
		panic(err)
	}
	defer func() {
		_ = resp.Body.Close()
	}()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}

	err = json.Unmarshal(body, response)

	if err != nil {
		panic(err)
	}
}

// 生成随机字符串
func StrRand(len int) string {
	// 21-64 65-126
	seeds := make([]string, 0)

	for i := 33; i < 127; i++ {
		seeds = append(seeds, ToChar(i))
	}
	s := ""
	rand.Seed(time.Now().UnixNano())
	for i := 0; i < len; i++ {
		s += seeds[Rand(0, 94)]
	}

	return s
}

// 生成随机数
func Rand(min int, max int) int {
	if min >= max {
		panic("min can not bigger than max")
	}
	rand.Seed(time.Now().UnixNano())
	return rand.Intn(max-min) + min
}

// 整数转换成可见字符
func ToChar(v int) string {
	if v < 33 {
		panic("too small")
	}

	if v > 126 {
		panic("too big")
	}
	return string(v)
}
