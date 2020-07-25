package dp

import "testing"

func TestDp_Run(t *testing.T) {
	d := New()
	s := "aabcdefabcdefghijklmaabcdef"
	s = "bbbbb"
	s = "pwwkew"
	d.Run(s)
}
