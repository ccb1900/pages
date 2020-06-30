package auth

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"itiswho.com/example/sso/model/account"
	"time"
)
type LoginForm struct {
	Account string `json:"account"`
	Password string `json:"password"`
}
func Login(c *gin.Context) {
	// 检测用户名和密码，创建一个sso session
	// 返回TGT cookie （session key），在url中携带，也就是 302 重定向到service
	_account := account.First(c.PostForm("account"))

	if _account != nil {
		session := sessions.Default(c)
		session.Set("login",1)
		session.Set("user",_account.Account)
		_ = session.Save()
		//mm := store.Map()
		ticket := time.Now().String()+_account.Account
		c.Redirect(302,c.Query("service")+"?ticket="+ticket)
	} else {
		c.JSON(422,gin.H{
			"message": "出错误了",
		})
	}

}
func LoginPage(c *gin.Context) {
	session := sessions.Default(c)
	if session.Get("login") == 1 {
		ticket := time.Now().String()
		c.Redirect(302,c.Query("service")+"?ticket="+ticket)
	}
	c.HTML(200,"auth_index.tmpl",gin.H{
		"title":"sso 登录",
	})
}
func Logout(c *gin.Context){
	c.JSON(200, gin.H{
		"message": "logout",
	})
}

func Validate(c *gin.Context)  {
	c.JSON(200, gin.H{
		"message": "logout",
	})
}
func ServiceValidate(c *gin.Context)  {
	c.JSON(200, gin.H{
		"message": "logout",
	})
}
func ProxyValidate(c *gin.Context)  {
	c.JSON(200, gin.H{
		"message": "logout",
	})
}
func Proxy(c *gin.Context)  {
	c.JSON(200, gin.H{
		"message": "logout",
	})
}
func P3ServiceValidate(c *gin.Context)  {
	c.JSON(200, gin.H{
		"message": "logout",
	})
}
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
