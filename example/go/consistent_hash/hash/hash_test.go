package hash

import (
	"fmt"
	"strconv"
	"testing"
)

func benchmark(ch ConsistentHash) {
	mm := make(map[string]int64)

	for i := 0; i < 10000; i++ {
		mm[ch.GetNode(strconv.Itoa(i))]++
	}
	for x, y := range mm {
		fmt.Println(x, y)
	}
}
func Test_hash(t *testing.T) {
	servers := make([]string, 0)

	for i := 1; i <= 10; i++ {
		servers = append(servers, "192.168.0."+strconv.Itoa(i)+":1234")
	}
	ch := New(5, servers)

	//ch.Remove("192.168.0.6:1234")

	benchmark(*ch)

	ch.Add("192.168.0.11:1234")
	mm2 := make(map[string]int64)

	for i := 0; i < 10000; i++ {
		mm2[ch.GetNode(strconv.Itoa(i))]++
	}

	for x, y := range mm2 {
		fmt.Println(x, y)
	}
}
