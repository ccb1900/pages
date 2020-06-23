package hash

import (
	"fmt"
	"strconv"

	"itiswho.com/example/consistent_hash/md5"
	"itiswho.com/example/consistent_hash/sortedmap"
)

type ConsistentHash struct {
	servers      []string
	realNodes    []string
	replicas     int
	virtualNodes *sortedmap.SortedMap
	HashFunc
}

// 获取虚拟节点列表
func (ch *ConsistentHash) GetVirtualNodes() []string {
	s := make([]string, 0)
	vMap := ch.virtualNodes.Values()
	for _, y := range ch.virtualNodes.Keys() {
		s = append(s, vMap[y])
	}

	return s
}
func (ch *ConsistentHash) Add(server string) {
	fmt.Println("Add")
	ch.realNodes = append(ch.realNodes, server)
	for j := 0; j < ch.replicas; j++ {
		virtualNodeName := server + "@VN#" + strconv.Itoa(j)
		hashValue := ch.Hash(virtualNodeName)
		fmt.Println("虚拟节点[" + virtualNodeName + "]被添加，哈希值为[" + strconv.FormatInt(hashValue, 10) + "]")
		ch.virtualNodes.Put(hashValue, virtualNodeName)
	}
}

func (ch *ConsistentHash) Remove(key string) {
	fmt.Println("Remove")
	// 移除真实服务器
	newServers := make([]string, 0)

	for _, v := range ch.realNodes {
		if v != key {
			newServers = append(newServers, v)
		}
	}
	ch.realNodes = newServers

	// 移除虚拟节点
	for j := 0; j < ch.replicas; j++ {
		virtualNodeName := key + "@VN#" + strconv.Itoa(j)
		hashValue := ch.Hash(virtualNodeName)
		ch.virtualNodes.Remove(hashValue)
		fmt.Println("虚拟节点[" + virtualNodeName + "]被移除，哈希值为[" + strconv.FormatInt(hashValue, 10) + "]")
	}
}
func (ch *ConsistentHash) GetNode(key string) string {
	//fmt.Println("GetNode")
	hash := ch.Hash(key)
	// 得到大于该哈希值的map
	greatMap := ch.virtualNodes.TailMap(hash)
	var vNode string
	if greatMap.IsEmpty() {
		vNode = ch.virtualNodes.Get(ch.virtualNodes.FirstKey())
	} else {
		vNode = ch.virtualNodes.Get(greatMap.FirstKey())
	}

	return vNode
}

// 初始化
func New(replicas int, servers []string) *ConsistentHash {
	fmt.Println("new")
	ch := new(ConsistentHash)

	ch.HashFunc = md5.New()
	ch.servers = servers
	ch.replicas = replicas

	ch.virtualNodes = sortedmap.New()
	ch.realNodes = servers
	for i := 0; i < len(ch.realNodes); i++ {
		for j := 0; j < ch.replicas; j++ {
			virtualNodeName := ch.realNodes[i] + "@VN#" + strconv.Itoa(j)
			hashValue := ch.Hash(virtualNodeName)
			ch.virtualNodes.Put(hashValue, virtualNodeName)
			fmt.Println("虚拟节点[" + virtualNodeName + "]被添加，哈希值为[" + strconv.FormatInt(hashValue, 10) + "]")
		}
	}

	fmt.Println("初始化完成")
	return ch
}
