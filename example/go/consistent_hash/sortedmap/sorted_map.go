package sortedmap

import (
	"sort"
	"sync"
)
// 有序map 简单实现，空间换时间
type SortedMap struct {
	keys []int64
	data map[int64]string
	lock sync.Mutex
}

func (sm *SortedMap)Put(key int64,value string)  {
	sm.lock.Lock()
	sm.data[key] = value
	sm.keys = append(sm.keys,key)
	sort.Slice(sm.keys, func(i, j int) bool {
		return sm.keys[i] < sm.keys[j]
	})
	sm.lock.Unlock()
}

func (sm *SortedMap)Remove(key int64)  {
	newKeys := make([]int64,0)
	for _,v := range sm.keys {
		if v!=key {
			newKeys = append(newKeys,v)
		}
	}
	sort.Slice(newKeys, func(i, j int) bool {
		return newKeys[i] < newKeys[j]
	})
	sm.keys = newKeys
	delete(sm.data,key)
}

func (sm *SortedMap)Values() map[int64]string   {
	return sm.data
}
func (sm *SortedMap)Keys() []int64   {
	return sm.keys
}
func (sm *SortedMap)TailMap(key int64) *SortedMap   {
	greatMap := New()
	for sKey,value := range sm.data{
		if sKey > key {
			greatMap.Put(sKey,value)
		}
	}
	return greatMap
}



func (sm *SortedMap)FirstKey() int64  {
	return sm.keys[0]
}

func (sm *SortedMap)Get(key int64) string  {
	return sm.data[key]
}




func (sm *SortedMap)IsEmpty() bool  {
	return len(sm.keys) == 0
}

func New() *SortedMap  {
	sm := new(SortedMap)
	sm.data = make(map[int64]string,0)
	sm.keys = make([]int64,0)
	return sm
}