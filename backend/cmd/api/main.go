package main

import (
	"net/http"
	"os"

	"github.com/akseyh/patika-codejam-coolest-blog/backend/cmd/handlers"
	"github.com/akseyh/patika-codejam-coolest-blog/backend/pkg/utils"
	"github.com/labstack/echo"
)

func main() {
	//delete when deploy
	// err := godotenv.Load()
	// if err != nil {
	// 	panic(err)
	// }

	e := echo.New()
	e.Use(utils.CORSConfig(), utils.Logger())

	client := utils.Connect()
	defer utils.Close(client)

	login := handlers.Collection{
		C1: client.Database("coolest-blog").Collection("user"),
	}
	posts := handlers.Collection{
		C1: client.Database("coolest-blog").Collection("blog"),
		C2: client.Database("coolest-blog").Collection("user"),
	}
	profile := handlers.Collection{
		C1: client.Database("coolest-blog").Collection("profile"),
	}

	e.POST("/login", login.Login)
	e.POST("/checkToken", login.CheckToken)

	e.GET("/posts", posts.AllGetBlogPost)
	e.GET("/posts/:userId", posts.GetBlogPostById)
	e.POST("/posts", posts.PostBlogPost)
	e.PUT("/post/:postId", posts.UpdateBlogPost)

	e.GET("/profile/:userId", profile.GetProfileById)

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})

	//change when deploy
	e.Logger.Fatal(e.Start(":" + os.Getenv("PORT")))
	// e.Logger.Fatal(e.Start(":8080"))
}
