package config

import "os"

// add struct for app config including app name and port

type App struct {
	Name string
	Port string
}

func AppConfig() *App {
	return &App{
		Name: os.Getenv("APP_NAME"),
		Port: os.Getenv("APP_PORT"),
	}
}