package blockchain

import (
	"time"
	"strings"
	"github.com/gunbos1031/blockmining/utils"
)

type Block struct {
	Hash		string	`json:"hash"`
	PrevHash	string	`json:"prevHash,omitempty"`
	Payload		string	`json:"payload"`
	Timestamp	int		`json:"timestamp"`
	Nonce		int		`json:"nonce"`
	Difficulty	int		`json:"difficulty"`
	Height		int		`json:"height"`
}

func createBlock(prevHash, payload string, diff, height int) *Block {
	block := Block{
		Hash: "",
		PrevHash: prevHash,
		Payload: payload,
		Nonce: 0,
		Difficulty: diff,
		Height: height + 1,
	}
	block.mine()
	return &block
}

func (b *Block) mine() {
	target := strings.Repeat("0", b.Difficulty)
	for {
		b.Timestamp = int(time.Now().Unix())
		hash := utils.Hash(b)
		if strings.HasPrefix(hash, target) {
			b.Hash = hash
			break
		} else {
			b.Nonce++
		}
	}
}

func getPrevHash() string {
	blocks := Blockchain().Blocks
	l := len(blocks)
	if l == 0 {
		return ""
	}
	hash := blocks[l-1].Hash
	return hash
}