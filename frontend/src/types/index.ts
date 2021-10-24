export interface UserType {
    _id: number,
    username: string,
    jobTitle: string,
    profilePhotoUrl: string,
    cvUrl: string,
    bio: string,
    githubLink: string
}

export interface PostType {
    _id: number,
    title: string,
    author: string,
    text: string
}