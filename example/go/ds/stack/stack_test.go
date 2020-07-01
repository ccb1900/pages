package stack

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestNew(t *testing.T) {
	s := New()
	s.Push(1)
	s.Push(2)
	s.Push(3)
	assert.EqualValues(t,s.IsEmpty(),false)
	assert.EqualValues(t,s.Size(),3)
	assert.EqualValues(t,3,s.Pop())
	assert.EqualValues(t,2,s.Pop())
	assert.EqualValues(t,1,s.Pop())
	assert.EqualValues(t,s.Size(),0)
	assert.EqualValues(t,s.IsEmpty(),true)
}
