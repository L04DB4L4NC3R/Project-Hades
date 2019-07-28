package main

import (
	model "github.com/GDGVIT/Project-Hades/module"
	service "github.com/GDGVIT/Project-Hades/svc/coupons/cmd/service"
)

func main() {
	conn := model.ConnectToDB()
	defer conn.Close()
	model.DBInit(conn)
	service.Run()
}
