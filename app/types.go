package app

type Record struct {
    ID        string                 `json:"id"`
    Data      map[string]interface{} `json:"data"`
    CreatedAt int64                  `json:"created_at"`
    UpdatedAt int64                  `json:"updated_at"`
}

type Response struct {
    Message string      `json:"message"`
    Data    interface{} `json:"data"`
}
