package inttostring

import "testing"

func Test_process(t *testing.T) {
	if process(1235677) == "1235677" {
		t.Log("success")
	} else {
		t.Fail()
	}
}
