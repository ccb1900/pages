package deque

import "fmt"

// 双端队列 double-ended queue
type node struct {
	data interface{}
	next *node
	prev *node
}
type Deque struct {
	head *node
	rear *node
	size int
}

func (d *Deque)AddFirst(e interface{})  {
	newNode := new(node)
	newNode.data = e

	if d.head == nil {
		d.head = newNode
		d.rear = newNode
	}
	newNode.next = d.head
	d.head.prev = newNode
	d.head = newNode
	d.size++
}

func (d *Deque)AddLast(e interface{})  {
	newNode := new(node)
	newNode.data = e

	if d.rear == nil {
		d.head = newNode
		d.rear = newNode
	}
	newNode.prev = d.rear
	d.rear.next = newNode
	d.rear = newNode
	d.size++
}
func (d *Deque)RemoveFirst() interface{}  {
	if d.IsEmpty() {
		return nil
	}
	oldNew := d.head
	d.head = oldNew.next;

	if d.head != nil {
		d.head.prev = nil
	}

	d.size--
	return oldNew.data
}

func (d *Deque)RemoveLast() interface{}  {
	if d.IsEmpty() {
		return nil
	}
	oldNew := d.rear

	d.rear = oldNew.prev

	if d.rear!=nil {
		d.rear.next = nil
	}

	d.size--

	return oldNew.data
}

func (d *Deque)PeekFirst() interface{}  {
	if d.IsEmpty() {
		return nil
	}
	return d.head.data
}

func (d *Deque)PeekLast() interface{}  {
	if d.IsEmpty() {
		return nil
	}
	return d.rear.data
}

func (d *Deque)IsEmpty() bool {
	return d.rear==d.head && d.head==nil && d.size == 0
}

func (d *Deque)FirstTraversal()  {
	if !d.IsEmpty() {
		peek := d.head
		for peek != nil {
			fmt.Println(peek.data)
			peek = peek.next
		}
	}
}

func (d *Deque)LastTraversal()  {
	if !d.IsEmpty() {
		peek := d.rear
		for peek != nil {
			fmt.Println(peek.data)
			peek = peek.prev
		}
	}
}

func New() *Deque {
	d := new(Deque)

	return d
}
