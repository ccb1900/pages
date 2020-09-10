package dp

// 最长连续不重复子序列
import (
	"fmt"
	"strings"
)

type max struct {
	start int
	end   int
}
type Dp struct {
	longest string
	max
	current max
}

func (d *Dp) Run(s string) {
	d.longest = string(s[0])
	for i := 0; i < len(s); i++ {
		d.pass(string(s[i]), i)
	}

	fmt.Println(d.max)
}

func (d *Dp) pass(a string, index int) {
	if strings.Contains(d.longest, a) {
		if (d.max.end - d.max.start) < (d.current.end - d.current.start) {
			d.max = d.current
		}
		d.current.start = index
	} else {
		d.current.end = index
	}
}
func New() *Dp {
	return new(Dp)
}
