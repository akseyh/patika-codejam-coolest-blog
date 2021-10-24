package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type UserStruct struct {
	Id       primitive.ObjectID `bson:"_id,omitempty"`
	Username string             `bson:"username,omitempty"`
	Password string             `bson:"password,omitempty"`
	Token    string             `bson:"token"`
}
