package stack

type node struct {
	next interface{}
	data interface{}
}

type Stack struct {
	top *node
	size int
}
func (s *Stack)Push(e interface{}){
	s.size++
	newNode := new(node)
	newNode.data = e
	newNode.next = s.top.next
	s.top.next = newNode
}

func (s *Stack)Pop() interface{}  {
	if s.IsEmpty() {
		panic("the stack is empty")
	}
	s.size--
	old := s.top.next.(*node)
	s.top.next = old.next
	return old.data
}


func (s *Stack)IsEmpty() bool  {
	return s.size == 0
}

func (s *Stack)Size() int  {
	return s.size
}
func New() *Stack {
	s := new(Stack)
	s.top = new(node)
	return s
}
