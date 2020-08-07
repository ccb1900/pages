package utils

import (
	"fmt"
	"testing"
)

type args struct {
}
type headers struct {
	Accept         string `json:"Accept"`
	AcceptEncoding string `json:"Accept-Encoding"`
	AcceptLanguage string `json:"Accept-Language"`
	Host           string `json:"Host"`
	Dest           string `json:"Sec-Fetch-Dest"`
	Mode           string `json:"Sec-Fetch-Mode"`
	Site           string `json:"Sec-Fetch-Site"`
	User           string `json:"Sec-Fetch-User"`
	Insecure       string `json:"Upgrade-Insecure-Requests"`
	UserAgent      string `json:"User-Agent"`
	TraceId        string `json:"X-Amzn-Trace-Id"`
}
type httpBinGet struct {
	Args    args    `json:"args"`
	Headers headers `json:"headers"`
	Origin  string  `json:"origin"`
	Url     string  `json:"url"`
}

func TestMd5(t *testing.T) {
	fmt.Println(Md5(StrRand(16)))
}

func TestRequest(t *testing.T) {
	var response httpBinGet
	Request("https://httpbin.org/get", nil, &response)
	fmt.Println(response)
}

func TestStrRand(t *testing.T) {
	fmt.Println(StrRand(16))
}
