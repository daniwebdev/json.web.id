package main

import (
	"log"

	"github.com/daniwebdev/api-json-web-id/app"
	"github.com/daniwebdev/api-json-web-id/config"
	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()

	if err != nil {
	  log.Fatal("Error loading .env file")
	}

	appConfig := config.AppConfig()

	server := fiber.New()

	server = app.AppMiddleware(server)

	app.RouteInit(server)

	server.Listen(":" + appConfig.Port)

}