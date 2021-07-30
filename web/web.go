package web

import (
	"net/http"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func Start() {
	// Set the router as the default one shipped with Gin
	router := gin.Default()
	
	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./client/build", true)))
	
	// Setup route group for the API
	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "poing",
			})
		})
	}
	
	// Start and run the server
	router.Run(":80")
}