package utils

import (
	"fmt"
	"log"
	"crypto/sha256"
)

func HandleErr(err error) {
	if err != nil {
		log.Panic(err)
	}
}

func Hash(i interface{}) string {
	s := fmt.Sprintf("%v", i)
	hash := sha256.Sum256([]byte(s))
	return fmt.Sprintf("%x", hash)
}