export interface UserType {
    fullName: string,
    jobTitle: string,
    profilePhotoUrl: string
}

export interface PostType {
    _id: number,
    title: string,
    author: string,
    text: string
}