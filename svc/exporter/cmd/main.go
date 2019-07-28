package main

import (
	"log"
	"os"

	"github.com/GDGVIT/Project-Hades/svc/exporter/endpoints/controller"
)

func main() {
	log.Println(os.Getenv("PROJECTION_URI"))
	controller.Startup()
}
