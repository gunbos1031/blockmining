package blockchain

import (

)

type blockchain struct {
	Blocks []*Block	`json:"blocks"`
}

var b *blockchain

func Blockchain() *blockchain {
	if b == nil {
		b = &blockchain{}
	}
	return b
}

func (b *blockchain) AddBlock(payload string) {
	block := createBlock(getPrevHash(), payload, getHeight())
	b.Blocks = append(b.Blocks, block)
}

func getHeight() int {
	blocks := Blockchain().Blocks
	return len(blocks)
}