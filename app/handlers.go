package app

import (
	"database/sql"
	"encoding/json"
	"strconv"

	"github.com/daniwebdev/api-json-web-id/helpers"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

func getAllRecords(c *fiber.Ctx) error {
    db := c.Locals("db").(*sql.DB)

    query := c.Query("query")
    page, _ := strconv.Atoi(c.Query("page", "1"))
    limit, _ := strconv.Atoi(c.Query("limit", "10"))
    offset := (page - 1) * limit

    var rows *sql.Rows
    var err error
    if query != "" {
        rows, err = db.Query("SELECT id, data, created_at, updated_at FROM records WHERE data LIKE ? LIMIT ? OFFSET ?", "%"+query+"%", limit, offset)
    } else {
        rows, err = db.Query("SELECT id, data, created_at, updated_at FROM records LIMIT ? OFFSET ?", limit, offset)
    }

    if err != nil {
        return c.Status(500).JSON(Response{
            Message: "Something went wrong",
            Data:    nil,
        })
    }
    defer rows.Close()

    var records []Record
    for rows.Next() {
        var record Record
        var data string
        err := rows.Scan(&record.ID, &data, &record.CreatedAt, &record.UpdatedAt)
        if err != nil {
            return c.Status(500).JSON(Response{
                Message: "Something went wrong",
                Data:    nil,
            })
        }
        json.Unmarshal([]byte(data), &record.Data)
        records = append(records, record)
    }

    var total int
    if query != "" {
        db.QueryRow("SELECT COUNT(*) FROM records WHERE data LIKE ?", "%"+query+"%").Scan(&total)
    } else {
        db.QueryRow("SELECT COUNT(*) FROM records").Scan(&total)
    }

    return c.JSON(Response{
        Message: "success",
        Data: map[string]interface{}{
            "total":   total,
            "page":    page,
            "limit":   limit,
            "query":   query,
            "records": records,
        },
    })
}

func insertRecord(c *fiber.Ctx) error {
    db := c.Locals("db").(*sql.DB)

    var data map[string]interface{}
    if err := c.BodyParser(&data); err != nil {
        return c.Status(400).JSON(Response{
            Message: "Invalid request payload",
            Data:    nil,
        })
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
        return c.Status(500).JSON(Response{
            Message: "Something went wrong",
            Data:    nil,
        })
    }

    return c.JSON(Response{
        Message: "success",
        Data:    record,
    })
}


func updateRecord(c *fiber.Ctx) error {
    db := c.Locals("db").(*sql.DB)
    id := c.Params("id")

    var data map[string]interface{}
    if err := c.BodyParser(&data); err != nil {
        return c.Status(400).JSON(Response{
            Message: "Invalid request payload",
            Data:    nil,
        })
    }

    timestamp := helpers.GetTimestamp()
    dataJSON, _ := json.Marshal(data)
    _, err := db.Exec("UPDATE records SET data = ?, updated_at = ? WHERE id = ?", 
        string(dataJSON), timestamp, id)
    if err != nil {
        return c.Status(500).JSON(Response{
            Message: "Something went wrong",
            Data:    nil,
        })
    }

    return c.JSON(Response{
        Message: "success",
        Data: map[string]interface{}{
            "id":         id,
            "data":       data,
            "updated_at": timestamp,
        },
    })
}

func deleteRecord(c *fiber.Ctx) error {
    db := c.Locals("db").(*sql.DB)
    id := c.Params("id")

    _, err := db.Exec("DELETE FROM records WHERE id = ?", id)
    if err != nil {
        return c.Status(500).JSON(Response{
            Message: "Something went wrong",
            Data:    nil,
        })
    }

    return c.JSON(Response{
        Message: "success",
        Data:    nil,
    })
}