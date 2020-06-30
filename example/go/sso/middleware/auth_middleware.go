package middleware

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

func Auth() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		if session.Get("login") == 1 {
			c.Next()
		}
		if len(c.Query("ticket")) > 0 {
			session.Set("login",1)
			_ = session.Save()
			c.Next()
		}
		c.Redirect(302,"http://127.0.0.1:8100/login?service=http://127.0.0.1:8101")

	}
}
func Sso() gin.HandlerFunc  {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		if session.Get("login") == 1 {
			c.Next()
		} else {
			c.Redirect(302,"/login")
		}
	}
}


