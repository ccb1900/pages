package main

import (
	"crypto/md5"
	"encoding/hex"
)

func main() {
	data := []byte("hello")
	b := md5.Sum(data)
	hex.EncodeToString(b[:])
}
