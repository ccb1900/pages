package store

import "sync"

var store_map *sync.Map

func Map() *sync.Map  {
	if store_map == nil {
		store_map = new(sync.Map)
	}

	return store_map
}
