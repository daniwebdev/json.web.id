package app

import "github.com/gofiber/fiber/v2"



func RouteInit(app *fiber.App) {

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Ok!")
	})


	app.Get("/api", getAllRecords)
    app.Post("/api", insertRecord)
    app.Put("/api/:id", updateRecord)
    app.Delete("/api/:id", deleteRecord)

    app.Get("/api/app/:resource", getAllRecords)
    app.Post("/api/app/:resource", insertRecord)
    app.Put("/api/app/:resource/:id", updateRecord)
    app.Delete("/api/app/:resource/:id", deleteRecord)

}