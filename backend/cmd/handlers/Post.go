package handlers

import (
	"context"
	"errors"
	"net/http"

	"github.com/labstack/echo"
	"go.mongodb.org/mongo-driver/bson"
)

func (coll *Collection) Post(c echo.Context) error {
	filteredCursor, err := coll.C1.Find(context.TODO(), bson.M{})
	resultDoc := []bson.M{}
	if err = filteredCursor.All(context.TODO(), &resultDoc); err != nil {
		return errors.New("error from ReturnAll/filterCursor.All and error code= " + err.Error())
	}

	return c.JSON(http.StatusOK, resultDoc)
}
