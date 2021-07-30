package web

import (
	// "fmt"
	"net/http"
	"strconv"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/gunbos1031/blockmining/blockchain"
	"github.com/gunbos1031/blockmining/utils"
)

func post(c *gin.Context) {
	blockData := c.PostForm("blockData")
	blockDifficulty := c.PostForm("blockDifficulty")
	blockDiffAsInt, err := strconv.Atoi(blockDifficulty)
	utils.HandleErr(err)
	blockchain.Blockchain().AddBlock(blockData, blockDiffAsInt)
	c.Redirect(http.StatusFound, "https://blockminingsite-dqqwx.run.goorm.io/")
}

func get(c *gin.Context) {
	blocks := blockchain.Blockchain().Blocks
	c.JSON(http.StatusOK, blocks)
}

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
	blocks := router.Group("/api/blocks")
	{
		blocks.GET("/", get)
		blocks.POST("/", post)
	}
	
	// Start and run the server
	router.Run(":80")
}