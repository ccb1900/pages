package queue

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestQueue(t *testing.T) {
	queue := New()
	queue.Enqueue(1)
	queue.Enqueue(2)
	queue.Enqueue(3)

	assert.EqualValues(t,1,queue.Dequeue())
	assert.EqualValues(t,2,queue.Dequeue())
	assert.EqualValues(t,3,queue.Dequeue())
}
