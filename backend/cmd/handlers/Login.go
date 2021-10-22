package handlers

import (
	"context"
	"fmt"
	"net/http"

	"github.com/akseyh/patika-codejam-coolest-blog/backend/models"
	"github.com/akseyh/patika-codejam-coolest-blog/backend/pkg/utils"
	"github.com/labstack/echo"
	"go.mongodb.org/mongo-driver/bson"
)

func (coll *Collection) Login(c echo.Context) error {
	resultDoc := &models.UserStruct{}
	if err := c.Bind(resultDoc); err != nil {
		fmt.Println("bind err", err)
		return c.JSON(http.StatusNoContent, err.Error())
	}

	filterDoc := models.UserStruct{
		Username: resultDoc.Username,
		Password: resultDoc.Password,
	}

	coll.C1.FindOne(context.TODO(), filterDoc).Decode(resultDoc)

	if resultDoc.Id.Hex() == "000000000000000000000000" {
		return c.JSON(http.StatusBadRequest, "uza birader 4 kişilik içerisi")
	}

	token := utils.CreateToken(*resultDoc)
	return c.JSON(http.StatusOK, bson.M{
		"userId":   resultDoc.Id,
		"token":    token,
		"username": resultDoc.Username,
	})
}
