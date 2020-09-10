package model

import (
	"fmt"
	"github.com/jinzhu/gorm"
	"path/filepath"
	"sync"
)

var db *gorm.DB
var lock sync.Mutex

func DB() *gorm.DB {
	lock.Lock()
	defer lock.Unlock()
	if db == nil {
		p, _ := filepath.Abs("../model/migration/test.db")
		fmt.Println(p)
		dbb, err := gorm.Open("sqlite3", p)

		if err != nil {
			panic("failed to connect db")
		}
		//defer func() {
		//	_ = db.Close()
		//}()
		db = dbb
	}

	return db
}
