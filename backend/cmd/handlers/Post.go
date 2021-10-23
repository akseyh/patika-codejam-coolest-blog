package handlers

import (
	"context"
	"errors"
	"net/http"
	"time"

	"github.com/akseyh/patika-codejam-coolest-blog/backend/models"
	"github.com/labstack/echo"
	"go.mongodb.org/mongo-driver/bson"
)

func (coll *Collection) AllGetBlogPost(c echo.Context) error {
	filteredCursor, err := coll.C1.Find(context.TODO(), bson.M{})
	resultDoc := []bson.M{}
	if err = filteredCursor.All(context.TODO(), &resultDoc); err != nil {
		return errors.New("error from ReturnAll/filterCursor.All and error code= " + err.Error())
	}
	return c.JSON(http.StatusOK, resultDoc)
}
func (coll *Collection) GetBlogPostById(c echo.Context) error {
	filteredCursor, err := coll.C1.Find(context.TODO(), bson.M{"userId": c.Param("userId")})
	resultDoc := []bson.M{}
	if err = filteredCursor.All(context.TODO(), &resultDoc); err != nil {
		return errors.New("error from ReturnAll/filterCursor.All and error code= " + err.Error())
	}
	return c.JSON(http.StatusOK, resultDoc)
}
func (coll *Collection) PostBlogPost(c echo.Context) error {
	resultDoc := &models.PostStruct{}
	if err := c.Bind(resultDoc); err != nil {
		return c.JSON(http.StatusNoContent, err.Error())
	}

	filterDoc := models.PostStruct{
		Id:          resultDoc.Id,
		Title:       resultDoc.Title,
		Text:        resultDoc.Text,
		UserId:      resultDoc.UserId,
		CreatedDate: time.Now(),
		Image:       resultDoc.Image,
		UserName:    resultDoc.UserName,
	}

	coll.C1.InsertOne(context.TODO(), filterDoc)
	return c.JSON(http.StatusOK, bson.M{
		"Id":          resultDoc.Id,
		"title":       resultDoc.Title,
		"text":        resultDoc.Text,
		"userId":      resultDoc.UserId,
		"createdDate": resultDoc.CreatedDate,
		"image":       resultDoc.Image,
		"username":    resultDoc.UserName,
	})
}
