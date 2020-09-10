package inttostring

import "fmt"

func process(num int) string {
	s_e := make([]string, 0)
	for num > 0 {
		s_e = append(s_e, string(num%10+48))
		num = num / 10
	}
	s := ""

	for i := len(s_e) - 1; i >= 0; i-- {
		s = s + s_e[i]
	}
	fmt.Println(s)

	return s
}
