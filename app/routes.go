package app

import "github.com/gofiber/fiber/v2"



func RouteInit(app *fiber.App) {

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Ok!")
	})


	app.Get("/app", getAllRecords)
    app.Post("/app", insertRecord)
    app.Put("/app/:id", updateRecord)
    app.Delete("/app/:id", deleteRecord)

    app.Get("/app/m/:namespace", getAllRecords)
    app.Post("/app/m/:namespace", insertRecord)
    app.Put("/app/m/:namespace/:id", updateRecord)
    app.Delete("/app/m/:namespace/:id", deleteRecord)

}