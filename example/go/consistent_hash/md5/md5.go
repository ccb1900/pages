package md5

import (
	"bytes"
	"math"
)

// 哈希函数
type Md5 struct {

}

func New() *Md5 {
	return new(Md5)
}

func (m *Md5)Hash(s string) int64  {
	var  p int64 = 16777619
	var hash int64 = 2166136261
	bs := bytes.NewBufferString(s).Bytes()
	for i :=0;i<len(bs);i++ {
		hash = (hash ^ int64(bs[i])) * p
	}

	hash += hash << 13
	hash ^= hash >> 7
	hash += hash << 5
	hash ^= hash >> 17
	hash += hash << 7

	if hash < 0 {
		hash = int64(math.Abs(float64(hash)))
	}
	return hash
}
