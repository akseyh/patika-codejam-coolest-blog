package handlers

import (
	"net/http"

	"github.com/akseyh/patika-codejam-coolest-blog/backend/models"
	"github.com/akseyh/patika-codejam-coolest-blog/backend/pkg/utils"
	"github.com/labstack/echo"
	"go.mongodb.org/mongo-driver/bson"
)

func (coll *Collection) CheckToken(c echo.Context) error {
	resultDoc := models.UserStruct{}

	if err := c.Bind(&resultDoc); err != nil {
		return c.JSON(http.StatusNoContent, bson.M{
			"errorDesc = ": "binding error",
			"errorCode =":  err.Error(),
		})
	}

	if resultDoc.Token == "" {
		return c.JSON(http.StatusNoContent, bson.M{
			"errorDesc = ": "token not found",
			"errorCode = ": "",
		})
	}

	result := utils.CheckTokenValidity(resultDoc.Token)
	if result["error"] != nil {
		return c.JSON(http.StatusBadRequest, bson.M{
			"errorDesc = ": "checkToken error",
			"errorCode = ": result["error"],
		})
	}

	resultDoc.Username = result["username"].(string)
	data := utils.CheckTokenDB(&resultDoc, coll.C1)
	if data["error"] != nil {
		return c.JSON(http.StatusBadRequest, data["error"])
	}
	return c.JSON(http.StatusOK, data)
}

/*
	user := c.Get("userToken").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	name := claims["username"].(string)
	return c.JSON(http.StatusOK, "Welcome "+name+"!")
*/
