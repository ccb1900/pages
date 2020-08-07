package e1

import "time"

func Handle() {
	names := []string{"eric", "harry", "robert", "jim", "mark"}
	for _, name := range names {
		go func(name string) {
			go println("hello", name)
		}(name)
	}
	time.Sleep(time.Millisecond)
}
