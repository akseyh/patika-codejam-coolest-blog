package main

import (
	"net/http"

	"github.com/akseyh/patika-codejam-coolest-blog/backend/pkg/utils"
	"github.com/labstack/echo"
)

func main() {
	e := echo.New()
	e.Use(utils.CORSConfig(), utils.Logger())
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.Logger.Fatal(e.Start(":8080"))
}
