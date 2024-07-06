package helpers

import (
	"crypto/md5"
	"database/sql"
	"fmt"

	"time"

	_ "github.com/mattn/go-sqlite3"
)

func getDatabaseName(apiKey, resource string) string {
    var dbName string
    if apiKey == "" {
        dbName = "general.db"
    } else if resource == "" {
        dbName = fmt.Sprintf("%x.db", md5.Sum([]byte(apiKey)))
    } else {
        dbName = fmt.Sprintf("%x.db", md5.Sum([]byte(apiKey+resource)))
    }
    return "./data/" + dbName
}

func InitDB(apiKey, resource string) (*sql.DB, error) {
    dbName := getDatabaseName(apiKey, resource)
    db, err := sql.Open("sqlite3", dbName)
    if err != nil {
        return nil, err
    }

    createTableSQL := `CREATE TABLE IF NOT EXISTS records (
        id TEXT PRIMARY KEY,
        data TEXT,
        created_at INTEGER,
        updated_at INTEGER
    );`

    _, err = db.Exec(createTableSQL)
    if err != nil {
        return nil, err
    }

    return db, nil
}

func GetTimestamp() int64 {
    return time.Now().Unix()
}
