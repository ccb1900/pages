package queue

type node struct {
	data interface{}
	next *node
}

type Queue struct {
	head *node
	rear *node
	size int
}

func (queue *Queue)Enqueue(v interface{})  {
	queue.size++
	newNode := new(node)
	newNode.data = v
	queue.rear.next = newNode
	queue.rear = newNode
}

func (queue *Queue)Dequeue() interface{}  {
	if queue.IsEmpty() {
		panic("the queue is empty")
	}
	queue.size--
	old := queue.head.next
	queue.head.next = old.next
	return old.data
}

func (queue *Queue)IsEmpty() bool  {
	return queue.size == 0
}

func (queue *Queue)Size() int  {
	return queue.size
}

func New() *Queue  {
	q := new(Queue)
	q.head = new(node)
	q.rear = q.head
	return q
}
