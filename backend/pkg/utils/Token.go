package utils

import (
	"net/http"
	"os"
	"time"

	"github.com/akseyh/patika-codejam-coolest-blog/backend/models"
	"github.com/dgrijalva/jwt-go"
	"github.com/labstack/echo"
)

func CreateToken(user models.UserStruct) string {
	// Create token
	token := jwt.New(jwt.SigningMethodHS256)
	// Set claims
	claims := token.Claims.(jwt.MapClaims)
	claims["name"] = "userToken"
	claims["value"] = user.Id
	claims["username"] = user.Username
	claims["admin"] = true
	claims["exp"] = time.Now().Add(time.Hour * 1).Unix()
	// Generate encoded token and send it as response.
	//declare your secret in .env
	t, err := token.SignedString([]byte(os.Getenv("secret")))
	if err != nil {
		return err.Error()
	}
	return t
}

func CheckToken(c echo.Context) error {
	user := c.Get("userToken").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	name := claims["username"].(string)
	return c.JSON(http.StatusOK, "Welcome "+name+"!")
}
