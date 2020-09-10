package spawning

import (
	"fmt"
	"os/exec"
)

func Spawning() {
	cmd := exec.Command("ls", "-al")
	bs, err := cmd.Output()
	if err != nil {
		fmt.Println("date", err)
	}

	fmt.Println("date::", string(bs))
}
