package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type ProfileStruct struct {
	Id       primitive.ObjectID `bson:"_id,omitempty"`
	UserName string             `bson:"userName,omitempty"`
	Image    string             `bson:"image,omitempty"`
	JobTitle string             `bson:"jobTitle,omitempty"`
	CvUrl    string             `bson:"cvUrl,omitempty"`
	UserId   string             `bson:"userId,omitempty"`
	Bio      string             `bson:"bio,omitempty"`
	Github   string             `bson:"github,omitempty"`
}
