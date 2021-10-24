package handlers

import (
	"errors"
	"net/http"

	"github.com/akseyh/patika-codejam-coolest-blog/backend/models"
	"github.com/akseyh/patika-codejam-coolest-blog/backend/pkg/utils"
	"github.com/labstack/echo"
)

func (coll *Collection) CheckToken(c echo.Context) error {
	user := models.UserStruct{}
	if err := c.Bind(&user); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	if err := utils.CheckToken(user); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	data := utils.CheckTokenDB(user, coll.C1)
	if data == nil {
		return c.JSON(http.StatusBadRequest, errors.New("tokens must be same"))
	}
	return c.JSON(http.StatusOK, data)
}

/*
	user := c.Get("userToken").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	name := claims["username"].(string)
	return c.JSON(http.StatusOK, "Welcome "+name+"!")
*/
