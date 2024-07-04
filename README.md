# GoFiber API with SQLite

This project is a simple RESTful API built with GoFiber and SQLite. It supports CRUD operations with dynamic data and uses an API key for database selection.

## Features

- **CRUD Operations**: Create, Read, Update, Delete records.
- **Dynamic Database Selection**: Database file selected based on API key and namespace.
- **Pagination and Search**: Supports pagination and search for fetching records.

## Endpoints

### Headers

- `apiKey` (optional)

### Without Namespace

- `[GET] /app`: Get all records.
- `[POST] /app`: Insert a record to the database.
- `[PUT] /app/:id`: Update a record by `id`.
- `[DELETE] /app/:id`: Delete a record by `id`.

### With Namespace

- `[GET] /app/m/:namespace`: Get all records.
- `[POST] /app/m/:namespace`: Insert a record to the database.
- `[PUT] /app/m/:namespace/:id`: Update a record by `id`.
- `[DELETE] /app/m/:namespace/:id`: Delete a record by `id`.

### Request Payload

For `[POST] /app` and `[POST] /app/m/:namespace`:

```json
{
    "key": "value",
    "key2": "value2"
}
```

### Response Format

#### Success Response (200)

```json
{
    "message": "success",
    "data": {
        "id": "1234567890",
        "key": "value",
        "key2": "value2",
        "created_at": 1234567890,
        "updated_at": 1234567890
    }
}
```

#### Error Response (500)

```json
{
    "message": "Something went wrong",
    "data": null
}
```

#### List of Records with Pagination and Search

```json
{
    "message": "success",
    "data": {
        "total": 1,
        "page": 1,
        "limit": 10,
        "query": "query search",
        "records": [
            {
                "id": "1234567890",
                "key": "value",
                "key2": "value2",
                "created_at": 1234567890,
                "updated_at": 1234567890
            }
        ]
    }
}
```

## Setup

### Prerequisites

- [Go](https://golang.org/dl/) (version 1.16 or higher)
- [SQLite](https://www.sqlite.org/download.html)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/gofiber-api-sqlite.git
    cd gofiber-api-sqlite
    ```

2. Install dependencies:

    ```bash
    go mod tidy
    ```

3. Run the application:

    ```bash
    go run main.go
    ```

4. The API will be available at `http://localhost:3000`.

## Project Structure

```
.
├── Makefile
├── README.md
├── app
│   ├── handlers.go
│   ├── middleware.go
│   ├── routes.go
│   └── types.go
├── config
│   └── app.go
├── data
│   ├── 6ac99cc3d1a009c8eaeb44cf6cacf7f1.db
│   ├── c3fcd3d76192e4007dfb496cca67e13b.db
│   └── general.db
├── go.mod
├── go.sum
├── helpers
│   └── db.go
├── http.rest
├── main.go
```

### `main.go`

This is the main entry point of the application. It sets up the routes and middleware.

### `helpers/database.go`

This file contains helper functions for initializing and managing the SQLite databases.

### `db`

This directory contains the SQLite database files. A default `general.db` is used if no API key or namespace is provided.

## Usage

### Insert a Record

```bash
curl -X POST http://localhost:3000/app -H "Content-Type: application/json" -d '{"key":"value", "key2":"value2"}'
```

### Get All Records

```bash
curl http://localhost:3000/app
```

### Update a Record

```bash
curl -X PUT http://localhost:3000/app/1234567890 -H "Content-Type: application/json" -d '{"key":"new_value"}'
```

### Delete a Record

```bash
curl -X DELETE http://localhost:3000/app/1234567890
```

## License

This project is licensed under the MIT License.