package fib

type Fib struct {
}

func New() *Fib {
	return new(Fib)
}

// 正推法，保留了每一步的状态，并且可以计算出下一步的状态，逐步得到最终的状态
func (fib *Fib) handle(n int) int {
	if n <= 1 {
		return 1
	}

	one := 1
	two := 1
	answer := one + two

	for i := 2; i <= n; i++ {
		one = two
		two = answer
		answer = one + two
	}

	return answer
}
