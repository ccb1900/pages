package execing

import (
	"fmt"
	"os"
	"os/exec"
	"syscall"
)

func Execing() {
	bin, lookErr := exec.LookPath("ls")

	if lookErr != nil {
		fmt.Println(lookErr)
	}
	args := []string{"ls", "-al"}
	env := os.Environ()
	execErr := syscall.Exec(bin, args, env)

	if execErr != nil {
		fmt.Println(execErr)
	}
}
