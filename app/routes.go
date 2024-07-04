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

    app.Get("/api/app/:namespace", getAllRecords)
    app.Post("/api/app/:namespace", insertRecord)
    app.Put("/api/app/:namespace/:id", updateRecord)
    app.Delete("/api/app/:namespace/:id", deleteRecord)

}