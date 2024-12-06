import { Document } from "mongoose";

export interface PostSchema {
    title: string,
    description: string;
    type: string;
    category: string;
    likesCount: number;
    dislikesCount: number;
    commentsCount: number;
    createdAt: Date,
    updatedAt: Date
}

export interface BlogsSchema extends PostSchema, Document {
    isImported: boolean
}

export interface DiscussionSchema extends PostSchema, Document {

}