package main

import (
	// "github.com/gunbos1031/blockmining/web"
	"github.com/gunbos1031/blockmining/blockchain"
	"fmt"
)

func main() {
	blockchain.Blockchain().AddBlock("Genesis")
	blockchain.Blockchain().AddBlock("Second")
	blockchain.Blockchain().AddBlock("Third")
	blocks := blockchain.Blockchain().Blocks
	for i := range [3]int{} {
		fmt.Println(blocks[i])
	}
}