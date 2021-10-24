package utils

import (
	"context"
	"errors"
	"fmt"
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

func CheckToken(user models.UserStruct) error {
	token, _ := jwt.Parse(user.Token, nil)
	if _, ok := token.Claims.(jwt.Claims); !ok && !token.Valid {
		return errors.New("invalid token")
	}
	claims := token.Claims.(jwt.MapClaims)
	if float64(time.Now().Unix()) >= claims["exp"].(float64) {
		return errors.New("expired Token")
	}
	if user.Username != "" {
		if claims["username"] != user.Username {
			return errors.New("wrong Token with username")
		}
	} else {
		fmt.Println(claims["_id"], user.Id.Hex())
		if claims["_id"] != user.Id.Hex() {
			return errors.New("wrong Token with id")
		}
	}
	if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
		return errors.New("unexpected signing method")
	}
	return nil
}

func CheckTokenDB(user models.UserStruct, coll *mongo.Collection) bson.M {
	token, _ := jwt.Parse(user.Token, nil)
	claims := token.Claims.(jwt.MapClaims)
	data := bson.M{}
	user2 := models.UserStruct{}
	coll.FindOne(context.TODO(), bson.M{
		"username": claims["username"],
	}).Decode(data)

	fmt.Println("data1", data)
	if data["token"] == nil || data["username"] == nil {
		return bson.M{"error": "token error"}
	}
	user2.Token = data["token"].(string)
	user2.Username = claims["username"].(string)

	if err := CheckToken(user2); err != nil {
		return bson.M{"error": err.Error()}
	}
	if user.Token != user2.Token {
		return bson.M{"error": errors.New("tokens must be same")}
	}
	return bson.M{"_id": claims["_id"], "username": user2.Username}
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
