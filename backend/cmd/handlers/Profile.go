package handlers

import (
	"context"
	"errors"
	"net/http"

	"github.com/akseyh/patika-codejam-coolest-blog/backend/models"
	"github.com/labstack/echo"
	"go.mongodb.org/mongo-driver/bson"
)

func (coll *Collection) GetProfileById(c echo.Context) error {
	resultDoc := &models.ProfileStruct{}
	if err := c.Bind(resultDoc); err != nil {
		return c.JSON(http.StatusNoContent, err.Error())
	}
	err := coll.C1.FindOne(context.TODO(), bson.M{"userId": c.Param("userId")}).Decode(resultDoc)
	if err != nil {
		return c.JSON(http.StatusNotFound, errors.New("error from ReturnAll/filterCursor.All and error code= "+err.Error()))
	}
	return c.JSON(http.StatusOK, bson.M{
		"jobTitle": resultDoc.JobTitle,
		"cvUrl":    resultDoc.CvUrl,
		"github":   resultDoc.Github,
		"bio":      resultDoc.Bio,
		"userId":   resultDoc.UserId,
	})
}
