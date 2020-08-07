package account

import (
	"itiswho.com/example/sso/model"
	"itiswho.com/example/sso/model/migration"
)

func First(name string) *migration.Account {
	var account migration.Account
	model.DB().Where("account=?", name).First(&account)

	if account.ID == 0 {
		return nil
	}
	return &account
}
