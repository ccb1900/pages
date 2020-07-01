package server

import (
	"fmt"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	"itiswho.com/example/sso/middleware"
	"itiswho.com/example/sso/model"
	"itiswho.com/example/sso/model/account"
	"itiswho.com/example/sso/server/controller/auth"
	store2 "itiswho.com/example/sso/server/store"
	"os"
)

func session()  {

}
func Server() {
	pwd,_:= os.Getwd()
	model.DB()
	store2.Map()
	a := account.First("cb")
	b := account.First("cbb")
	fmt.Println(a,b)
	r := gin.New()
	store := cookie.NewStore([]byte("server-secret"))
	r.Use(sessions.Sessions("server-session", store))

	r.LoadHTMLGlob(pwd+"/templates/*")
	r.Use(gin.Logger())
	r.Use(gin.Recovery())
	r.GET("/404", auth.Error404)
	r.GET("/login", auth.LoginPage)
	r.POST("/login", auth.Login)

	authM := r.Group("/")
	authM.Use(middleware.Sso())
	authM.DELETE("/logout", auth.Logout)
	authM.GET("/validate", auth.Validate)
	authM.POST("/serviceValidate", auth.Validate)
	authM.POST("/proxyValidate", auth.Validate)
	authM.POST("/proxy", auth.Validate)
	authM.POST("/p3/serviceValidate", auth.Validate)
	authM.POST("/p3/proxyValidate", auth.Validate)
	authM.GET("/", auth.Home)
	_ = r.Run(":8100")
}

func FileExist()  {
	fmt.Println(os.Getwd());
}