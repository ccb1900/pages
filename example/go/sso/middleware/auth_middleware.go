package middleware

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"net/http"
)

func Auth() gin.HandlerFunc {
	return func(c *gin.Context) {
		service_url := c.Request.Host
		cas_login_url := "http://127.0.0.1:8100/login?service=http://"+service_url
		session := sessions.Default(c)
		if session.Get("login") == 1 {
			c.Next()
		}
		if len(c.Query("ticket")) > 0 {
			resp,err := http.Get("http://127.0.0.1:8100/validate")

			if err != nil {
				c.Redirect(302,"http://127.0.0.1:8100/login?service=http://"+service_url)
			}
			defer func() {
				_ = resp.Body.Close()
			}()

			//body, err := ioutil.ReadAll(resp.Body)
			//
			//var validate validate2.Validate
			//_ = json.Unmarshal(body,&validate)

			if resp.StatusCode == 200 {
				session.Set("login",1)
				_ = session.Save()
				// 使用重定向，不携带ticket
				c.Redirect(302,"http://"+service_url)
			} else {
				// 使用重定向，不携带ticket
				c.Redirect(302,cas_login_url)
			}

		}
		c.Redirect(302,cas_login_url)

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


