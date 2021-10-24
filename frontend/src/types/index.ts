export interface UserType {
    bio: string,
    cvUrl: string,
    github: string
    image: string,
    jobTitle: string,
    userId: string,
    username: string,
}

export interface PostType {
    _id: string,
    title: string,
    userId: string
    userName: string,
    text: string,
    createdDate: Date,
}