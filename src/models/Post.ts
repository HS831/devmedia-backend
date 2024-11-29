import { PostTypes } from "../enums/PostTypes";

export interface Post {
    title: string,
    description: string;
    type: string;
    category: string;
    likesCount: number;
    dislikesCount: number;
    commentsCount: number;
}

export interface Discussion extends Post {
    
}