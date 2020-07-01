package auth

import (
	"crypto/md5"
	"encoding/hex"
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"itiswho.com/example/sso/model/account"
	"strconv"
	"time"
)
type LoginForm struct {
	Account string `json:"account"`
	Password string `json:"password"`
}
// cas 1.0 credential requestor / acceptor
func Login(c *gin.Context) {
	// 检测用户名和密码，创建一个sso session
	// 返回TGT cookie （session key），在url中携带，也就是 302 重定向到service
	_account := account.First(c.PostForm("account"))

	if _account != nil {
		session := sessions.Default(c)
		session.Set("login",1)
		session.Set("user",_account.Account)

		// 记录已经登录的 service
		if session.Get("index") == nil {
			session.Set("index",0)
		}
		var s int
		s = session.Get("index").(int)
		session.Set("services"+strconv.Itoa(s),c.Query("service"))

		// 生成ticket
		b_ticket := md5.Sum([]byte(time.Now().String()+_account.Account))
		ticket := hex.EncodeToString(b_ticket[:])
		session.Set("ticket",ticket)
		session.Set(c.Query("service"),ticket)

		_ = session.Save()

		c.Redirect(302,c.Query("service")+"?ticket="+ticket)
	} else {
		c.JSON(422,gin.H{
			"message": "出错误了",
		})
	}

}
// cas 1.0 登录页面
func LoginPage(c *gin.Context) {
	session := sessions.Default(c)
	if session.Get("login") == 1 {
		// 记录已经登录的 service
		if session.Get("index") == nil {
			session.Set("index",0)
		}
		var s int
		s = session.Get("index").(int)
		session.Set("services"+strconv.Itoa(s),c.Query("service"))

		// 生成ticket
		b_ticket := md5.Sum([]byte(time.Now().String()))
		ticket := hex.EncodeToString(b_ticket[:])
		session.Set("ticket",ticket)
		session.Set(c.Query("service"),ticket)

		_ = session.Save()

		c.Redirect(302,c.Query("service")+"?ticket="+ticket)
	}
	c.HTML(200,"auth_index.tmpl",gin.H{
		"title":"sso 登录",
	})
}
// cas 1.0 退出登录 destroy CAS session (logout)
func Logout(c *gin.Context){
	session := sessions.Default(c)
	session.Clear()
	_ = session.Save()

	c.Redirect(200,"/login")
}

// cas 1.0 验证ticket
func Validate(c *gin.Context)  {
	session := sessions.Default(c)
	if session.Get(c.Query("service")) == c.Query("ticket"){
		c.JSON(200, gin.H{
			"status": "yes",
		})
	} else {
		c.JSON(401, gin.H{
			"status": "no",
		})
	}

}
// @todo cas 2.0
func ServiceValidate(c *gin.Context)  {
	c.JSON(200, gin.H{
		"message": "logout",
	})
}
// @todo cas 2.0
func ProxyValidate(c *gin.Context)  {
	c.JSON(200, gin.H{
		"message": "logout",
	})
}
// @todo cas 2.0
func Proxy(c *gin.Context)  {
	c.JSON(200, gin.H{
		"message": "logout",
	})
}
// @todo cas 3.0
func P3ServiceValidate(c *gin.Context)  {
	c.JSON(200, gin.H{
		"message": "logout",
	})
}
// @todo cas 3.0
func P3ProxyValidate(c *gin.Context)  {
	c.JSON(200, gin.H{
		"message": "logout",
	})
}
func Error404(c *gin.Context)  {
	c.HTML(404,"404.tmpl",gin.H{})
}

func Home(c *gin.Context)  {
	session := sessions.Default(c)
	c.JSON(200, gin.H{
		"message": "home",
		"session": session.Get("user"),
	})
}
