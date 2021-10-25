package handlers

import (
	"context"
	"errors"
	"net/http"

	"github.com/akseyh/patika-codejam-coolest-blog/backend/models"
	"github.com/akseyh/patika-codejam-coolest-blog/backend/pkg/utils"
	"github.com/labstack/echo"
	"go.mongodb.org/mongo-driver/bson"
)

func (coll *Collection) Login(c echo.Context) error {
	resultDoc := &models.UserStruct{}

	if err := c.Bind(resultDoc); err != nil {
		return c.JSON(http.StatusNoContent, err.Error())
	}

	if resultDoc.Username == "" || resultDoc.Password == "" {
		return c.JSON(http.StatusBadRequest, errors.New("username and password must be"))
	}

	coll.C1.FindOne(context.TODO(), bson.M{
		"username": resultDoc.Username,
		"password": resultDoc.Password,
	}).Decode(resultDoc)

	if resultDoc.Id.Hex() == "000000000000000000000000" {
		return c.JSON(http.StatusBadRequest, "uza birader 4 kişilik içerisi")
	}

	resultDoc.Token = utils.CreateToken(*resultDoc)
	if err := utils.WriteTokenDB(*resultDoc, coll.C1); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}

	return c.JSON(http.StatusOK, bson.M{
		"userId":   resultDoc.Id,
		"token":    resultDoc.Token,
		"username": resultDoc.Username,
	})
}
