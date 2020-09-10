package client1

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	"itiswho.com/example/sso/client1/home"
	"itiswho.com/example/sso/middleware"
)

func Server() {
	r := gin.New()
	r.Use(gin.Logger())
	r.Use(gin.Recovery())
	store := cookie.NewStore([]byte("client1"))
	r.Use(sessions.Sessions("client1-server", store))

	authM := r.Group("/")
	authM.Use(middleware.Auth())
	authM.GET("/", home.Index)
	_ = r.Run(":8101")
}
