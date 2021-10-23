package main

import (
	"net/http"

	"github.com/akseyh/patika-codejam-coolest-blog/backend/cmd/handlers"
	"github.com/akseyh/patika-codejam-coolest-blog/backend/pkg/utils"
	"github.com/labstack/echo"
)

func main() {
	e := echo.New()
	e.Use(utils.CORSConfig(), utils.Logger())
	client := utils.Connect()
	defer utils.Close(client)
	login := handlers.Collection{
		C1: client.Database("coolest-blog").Collection("user"),
		C2: client.Database("coolest-blog").Collection("token"),
	}
	blog := handlers.Collection{
		C1: client.Database("coolest-blog").Collection("post"),
	}
	e.POST("/login", login.Login)
	e.POST("/checkToken", utils.CheckToken)
	e.GET("/blog", blog.Post)
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.Logger.Fatal(e.Start(":8080"))
}
