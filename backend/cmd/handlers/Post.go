package handlers

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"time"

	"github.com/akseyh/patika-codejam-coolest-blog/backend/models"
	"github.com/akseyh/patika-codejam-coolest-blog/backend/pkg/utils"
	"github.com/labstack/echo"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
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
	user := models.UserStruct{}
	head := c.Request().Header
	for i, v := range head {
		fmt.Println(i, v)
	}
	if head["Token"] == nil {
		return c.JSON(http.StatusBadRequest, "don't have token")
	}
	user.Token = head["Token"][0]
	fmt.Println("user token", user.Token)

	data := utils.CheckTokenDB(&user, coll.C2)
	if data["error"] != nil {
		return c.JSON(http.StatusBadRequest, data["error"])
	}

	user.Username = data["username"].(string)
	if err := utils.CheckTokenValidity(user.Token); err["error"] != nil {
		return c.JSON(http.StatusBadRequest, err["error"])
	}

	if err := c.Bind(resultDoc); err != nil {
		return c.JSON(http.StatusNoContent, err.Error())
	}

	fmt.Println("post.gonun içindeyim")
	insertedDoc := models.PostStruct{
		Id:          resultDoc.Id,
		Title:       resultDoc.Title,
		Text:        resultDoc.Text,
		UserId:      data["_id"].(string),
		CreatedDate: time.Now(),
		UserName:    data["username"].(string),
	}
	fmt.Println("insertedDoc altı")

	result, _ := coll.C1.InsertOne(context.TODO(), insertedDoc)
	insertedDoc.Id = result.InsertedID.(primitive.ObjectID)
	return c.JSON(http.StatusOK, bson.M{
		"Id":          insertedDoc.Id,
		"title":       insertedDoc.Title,
		"text":        insertedDoc.Text,
		"userId":      insertedDoc.UserId,
		"createdDate": insertedDoc.CreatedDate,
		"username":    insertedDoc.UserName,
	})
}

func (coll *Collection) UpdateBlogPost(c echo.Context) error {
	fmt.Println("param", c.Param("postId"))
	data2 := bson.M{}
	if err := c.Bind(&data2); err != nil {
		c.JSON(http.StatusBadRequest, "bind error")
	}
	fmt.Println("data2", data2)
	id, _ := primitive.ObjectIDFromHex(c.Param("postId"))

	data := bson.M{}
	coll.C1.FindOneAndUpdate(context.TODO(), bson.M{"_id": id}, bson.M{"$set": data2}).Decode(data)
	fmt.Println(data)

	return nil
}
