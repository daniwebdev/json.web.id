# GoFiber API with SQLite

A simple yet powerful RESTful API built with GoFiber and SQLite, supporting CRUD operations and dynamic database selection.

## Features

- CRUD operations (Create, Read, Update, Delete)
- Dynamic database selection based on API key
- Pagination and search functionality

## API Endpoints

All endpoints require an `apiKey` header (optional).

### Generic Endpoints

- `GET /api`: Retrieve all records
- `POST /api`: Create a new record
- `PUT /api/:id`: Update a record
- `DELETE /api/:id`: Delete a record

### Resource-specific Endpoints

- `GET /api/app/:resourceName`: Retrieve all records for a specific resource
- `POST /api/app/:resourceName`: Create a new record for a specific resource
- `PUT /api/app/:resourceName/:id`: Update a record for a specific resource
- `DELETE /api/app/:resourceName/:id`: Delete a record for a specific resource

### Request Format (POST and PUT)

```json
{
    "key": "value",
    "key2": "value2"
}
```

### Response Formats

#### Success (200 OK)

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

#### Error (500 Internal Server Error)

```json
{
    "message": "Something went wrong",
    "data": null
}
```

#### Paginated Results

```json
{
    "message": "success",
    "data": {
        "total": 100,
        "page": 1,
        "limit": 10,
        "query": "search term",
        "records": [
            {
                "id": "1234567890",
                "key": "value",
                "key2": "value2",
                "created_at": 1234567890,
                "updated_at": 1234567890
            },
            // ... more records
        ]
    }
}
```

## Setup and Installation

### Prerequisites

- Go (version 1.16 or higher)
- SQLite

### Steps

1. Clone the repository:
   ```
   git clone https://github.com/your-username/gofiber-api-sqlite.git
   cd gofiber-api-sqlite
   ```

2. Install dependencies:
   ```
   go mod tidy
   ```

3. Run the application:
   ```
   go run main.go
   ```

The API will be available at `http://localhost:3000`.

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
└── main.go
```

## Usage Examples

### Create a Record
```bash
curl -X POST http://localhost:3000/api \
     -H "Content-Type: application/json" \
     -d '{"key":"value", "key2":"value2"}'
```

### Retrieve All Records
```bash
curl http://localhost:3000/api
```

### Update a Record
```bash
curl -X PUT http://localhost:3000/api/1234567890 \
     -H "Content-Type: application/json" \
     -d '{"key":"new_value"}'
```

### Delete a Record
```bash
curl -X DELETE http://localhost:3000/api/1234567890
```

## License

This project is licensed under the MIT License.