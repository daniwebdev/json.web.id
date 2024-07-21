package app

import "github.com/gofiber/fiber/v2"



func RouteInit(app *fiber.App) {

	app.Get("/", AppMiddleware, getAllRecords)
    app.Post("/", AppMiddleware, insertRecord)
    app.Put("/:id", AppMiddleware, updateRecord)
    app.Delete("/:id", AppMiddleware, deleteRecord)

    app.Get("/app/:resourceName", AppMiddleware, getAllRecords)
    app.Post("/app/:resourceName", AppMiddleware, insertRecord)
    app.Put("/app/:resourceName/:id", AppMiddleware, updateRecord)
    app.Delete("/app/:resourceName/:id", AppMiddleware, deleteRecord)

}