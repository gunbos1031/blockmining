package web

import (
	"net/http"
	"strconv"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/gunbos1031/blockmining/blockchain"
	"github.com/gunbos1031/blockmining/utils"
)

type blockResponse struct {
	BlockData string		`json:"blockData"`
	BlockDifficulty string	`json:"blockDifficulty"`
}

func post(c *gin.Context) {
	var br blockResponse
	err := c.ShouldBindJSON(&br)
	utils.HandleErr(err)
	payload := br.BlockData
	diff, err := strconv.Atoi(br.BlockDifficulty)
	utils.HandleErr(err)
	blockchain.Blockchain().AddBlock(payload, diff)
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
				"message": "pong",
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