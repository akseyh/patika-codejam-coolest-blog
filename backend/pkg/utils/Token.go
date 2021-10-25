package utils

import (
	"context"
	"errors"
	"os"
	"time"

	"github.com/akseyh/patika-codejam-coolest-blog/backend/models"
	"github.com/dgrijalva/jwt-go"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func CreateToken(user models.UserStruct) string {
	// Create token
	token := jwt.New(jwt.SigningMethodHS256)
	// Set claims
	claims := token.Claims.(jwt.MapClaims)
	claims["name"] = "userToken"
	claims["_id"] = user.Id
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

func CheckTokenValidity(tokenCame string) bson.M {
	token, _ := jwt.Parse(tokenCame, nil)
	if _, ok := token.Claims.(jwt.Claims); !ok && !token.Valid {
		return bson.M{"error": "invalid token"}
	}

	claims := token.Claims.(jwt.MapClaims)
	if claims["exp"] == nil {
		return bson.M{"error": "invalid token"}
	}

	if float64(time.Now().Unix()) >= claims["exp"].(float64) {
		return bson.M{"error": "expired Token"}
	}

	if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
		return bson.M{"error": "unexpected signing method"}
	}

	if claims["username"] != nil {
		return bson.M{"username": claims["username"].(string)}
	}

	return nil
}

func CheckTokenDB(user *models.UserStruct, coll *mongo.Collection) bson.M {
	userDB := bson.M{}

	coll.FindOne(context.TODO(), bson.M{
		"username": user.Username,
	}).Decode(userDB)

	if userDB["token"] == "" {
		return bson.M{"error": "username don't have token"}
	}

	if err := CheckTokenValidity(userDB["token"].(string)); err["error"] != nil {
		return bson.M{"error": err["error"]}
	}

	if user.Token != userDB["token"].(string) {
		return bson.M{"error": errors.New("tokens must be same")}
	}

	return bson.M{"_id": userDB["_id"], "username": userDB["username"].(string)}
}

func WriteTokenDB(user models.UserStruct, coll *mongo.Collection) error {
	_, err := coll.UpdateOne(context.TODO(),
		bson.M{"_id": user.Id},
		bson.M{"$set": bson.M{"token": user.Token}},
	)
	if err != nil {
		return err
	}
	return nil
}
