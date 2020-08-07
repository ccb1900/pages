package migration

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"os"
)

type Account struct {
	gorm.Model
	Account  string `json:"account"`
	Password string `json:"password"`
}

func Migrate() {
	pwd, _ := os.Getwd()
	db, err := gorm.Open("sqlite3", pwd+"/test.db")
	if err != nil {
		panic("failed to connect db")
	}

	defer func() {
		_ = db.Close()
	}()
	var account Account

	db.AutoMigrate(&account)

	db.Create(&Account{Account: "ccb", Password: "123456"})
	db.Create(&Account{Account: "cb", Password: "123456"})

}
