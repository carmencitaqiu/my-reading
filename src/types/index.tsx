export interface User {
    userId:       string,
    userName:     string
}

export interface CommentItem {
    author:     string,
    createDate: string,
    content:    string,
    likeNum:    number,
    isLike:     boolean,
    user?:      User
}

export interface DetailItem {
    title:      string,
    content:    string,
    commentlist:CommentItem[]
}
export interface ArticleItem {
    id:         number,
    title:      string,
    urlToImage: string,
    description:string,
    url:        string,
    commentlist: CommentItem[]
}