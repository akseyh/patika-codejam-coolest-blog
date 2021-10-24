export interface UserType {
    _id: string,
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
    userName: string,
    text: string
}