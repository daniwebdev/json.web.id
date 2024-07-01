package app

import (
	"github.com/daniwebdev/api-json-web-id/helpers"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)


func AppMiddleware(app *fiber.App) *fiber.App {

	app.Use(cors.New())
	

    app.Use(func(c *fiber.Ctx) error {
        apiKey := c.Get("apiKey")
        namespace := c.Params("namespace")

        db, err := helpers.InitDB(apiKey, namespace)
        if err != nil {
            return c.Status(500).SendString(err.Error())
        }

        c.Locals("db", db)
        return c.Next()
    })

	return app;
}