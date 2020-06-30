package home

import "github.com/gin-gonic/gin"

func Index(c *gin.Context)  {
	c.JSON(200, gin.H{
		"message": "client2-home-index",
		"auth": true,
	})
}