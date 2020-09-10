package review

type Stack struct {
	data []int
	top  int
}

type StackOfPlates struct {
	cap     int
	top     int
	current int
	pans    [][]Stack
}

func Constructor(cap int) StackOfPlates {

	return StackOfPlates{
		cap:  cap,
		pans: make([][]Stack, 1),
	}
}

func (this *StackOfPlates) Push(val int) {
	if this.top == this.cap {
		this.pans = append(this.pans, make([]Stack, 0))
		this.current++
		this.top = 0
	}
	this.top++
	this.pans[this.current] = append(this.pans[this.current], val)
}

func (this *StackOfPlates) Pop() int {
	this.top--
	e := this.pans[this.current][this.top]
	this.pans[this.current][this.top] = -1
	if this.top == 0 {
		this.top = this.cap
		this.pans[this.current] = nil
		this.current--
	}
	return e
}

func (this *StackOfPlates) PopAt(index int) int {

	return 0
}

/**
 * Your StackOfPlates object will be instantiated and called as such:
 * obj := Constructor(cap);
 * obj.Push(val);
 * param_2 := obj.Pop();
 * param_3 := obj.PopAt(index);
 */
