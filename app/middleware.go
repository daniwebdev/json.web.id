package app

import (
	"github.com/daniwebdev/api-json-web-id/helpers"
	"github.com/gofiber/fiber/v2"
)


func AppMiddleware(c *fiber.Ctx) error {
    apiKey := c.Get("X-Api-Key")
    resource := c.Params("resourceName")

    db, err := helpers.InitDB(apiKey, resource)
    if err != nil {
        return c.Status(500).SendString(err.Error())
    }

    c.Locals("db", db)
    return c.Next()
}