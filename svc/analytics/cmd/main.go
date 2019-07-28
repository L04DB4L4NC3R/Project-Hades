package main

import (
	"github.com/GDGVIT/Project-Hades/svc/analytics/endpoints"
	db "github.com/GDGVIT/Project-Hades/svc/analytics/modelfuncs"
)

func main() {
	var server *endpoints.Server

	// immutable event storage
	conn := db.DBconnect()
	defer conn.Close()

	server.Run()
}
