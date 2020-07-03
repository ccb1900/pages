package hash

func New() *Hash  {
	h := new(Hash)

	return h
}

// 哈希节点
type node struct {
	value interface{}
	links []interface{}
}
type Hash struct {
	slots []interface{}
}

// 这是一个哈希函数，无论key 是什么数据，最后都得到一个整数
func hash(key string) int  {
	return 0
}
func (h *Hash)Put(key string,value interface{})  {
	h.slots[hash(key)] = value
}
