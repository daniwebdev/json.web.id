package app

import "github.com/gofiber/fiber/v2"



func RouteInit(app *fiber.App) {

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Ok!")
	})

	app.Get("/api", AppMiddleware, getAllRecords)
    app.Post("/api", AppMiddleware, insertRecord)
    app.Put("/api/:id", AppMiddleware, updateRecord)
    app.Delete("/api/:id", AppMiddleware, deleteRecord)

    app.Get("/api/app/:resourceName", AppMiddleware, getAllRecords)
    app.Post("/api/app/:resourceName", AppMiddleware, insertRecord)
    app.Put("/api/app/:resourceName/:id", AppMiddleware, updateRecord)
    app.Delete("/api/app/:resourceName/:id", AppMiddleware, deleteRecord)

}