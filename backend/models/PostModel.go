package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type PostStruct struct {
	Id          primitive.ObjectID `bson:"_id,omitempty"`
	Title       string             `bson:"title,omitempty"`
	Text        string             `bson:"text,omitempty"`
	UserId      string             `bson:"userId,omitempty"`
	CreatedDate time.Time          `bson:"createdDate,omitempty"`
	UserName    string             `bson:"userName,omitempty"`
}
