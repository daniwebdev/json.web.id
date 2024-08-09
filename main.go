package main

import (
	"log"

	"github.com/daniwebdev/api-json-web-id/app"
	"github.com/daniwebdev/api-json-web-id/config"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()

	if err != nil {
	  log.Fatal("Error loading .env file")
	}

	appConfig := config.AppConfig()

	server := fiber.New()

	// Use CORS middleware with default configuration
	server.Use(cors.New(cors.Config{
		AllowOrigins: "*", // Allow all origins
		AllowMethods: "GET,POST,OPTIONS", // Allow GET, POST, and OPTIONS methods
		AllowHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization", // Allow specific headers
		// AllowCredentials: true, // Uncomment if you need to allow credentials
	}))
	

	app.RouteInit(server)


	server.Listen(":" + appConfig.Port)

}