package app

import (
	"database/sql"
	"encoding/json"

	"github.com/daniwebdev/api-json-web-id/helpers"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

func getAllRecords(c *fiber.Ctx) error {
    db := c.Locals("db").(*sql.DB)

    rows, err := db.Query("SELECT id, data, created_at, updated_at FROM records")
    if err != nil {
        return c.Status(500).SendString(err.Error())
    }
    defer rows.Close()

    var records []Record
    for rows.Next() {
        var record Record
        var data string
        err := rows.Scan(&record.ID, &data, &record.CreatedAt, &record.UpdatedAt)
        if err != nil {
            return c.Status(500).SendString(err.Error())
        }
        json.Unmarshal([]byte(data), &record.Data)
        records = append(records, record)
    }

    return c.JSON(records)
}

func insertRecord(c *fiber.Ctx) error {
    db := c.Locals("db").(*sql.DB)

    var data map[string]interface{}
    if err := c.BodyParser(&data); err != nil {
        return c.Status(400).SendString(err.Error())
    }

    record := Record{
        ID:        uuid.New().String(),
        Data:      data,
        CreatedAt: helpers.GetTimestamp(),
        UpdatedAt: helpers.GetTimestamp(),
    }

    dataJSON, _ := json.Marshal(record.Data)
    _, err := db.Exec("INSERT INTO records (id, data, created_at, updated_at) VALUES (?, ?, ?, ?)", 
        record.ID, string(dataJSON), record.CreatedAt, record.UpdatedAt)
    if err != nil {
        return c.Status(500).SendString(err.Error())
    }

    return c.JSON(record)
}

func updateRecord(c *fiber.Ctx) error {
    db := c.Locals("db").(*sql.DB)
    id := c.Params("id")

    var data map[string]interface{}
    if err := c.BodyParser(&data); err != nil {
        return c.Status(400).SendString(err.Error())
    }

    timestamp := helpers.GetTimestamp()
    dataJSON, _ := json.Marshal(data)
    _, err := db.Exec("UPDATE records SET data = ?, updated_at = ? WHERE id = ?", 
        string(dataJSON), timestamp, id)
    if err != nil {
        return c.Status(500).SendString(err.Error())
    }

    return c.JSON(fiber.Map{
        "id":         id,
        "data":       data,
        "updated_at": timestamp,
    })
}

func deleteRecord(c *fiber.Ctx) error {
    db := c.Locals("db").(*sql.DB)
    id := c.Params("id")

    _, err := db.Exec("DELETE FROM records WHERE id = ?", id)
    if err != nil {
        return c.Status(500).SendString(err.Error())
    }

    return c.SendStatus(204)
}