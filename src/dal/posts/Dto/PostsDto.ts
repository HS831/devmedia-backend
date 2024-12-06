import { PostTypes } from "../../../enums/PostTypes";

export interface BlogsRequestDto {
    title: string,
    description: string;
    type: PostTypes;
    category: string;
    likesCount: number;
    dislikesCount: number;
    commentsCount: number;
}

export interface BlogsResponseDto {
    id: string;
    title: string;
    description: string;
    category: string;
    type: string;
    isImported: boolean;
    likesCount: number;
    dislikesCount: number;
    commentsCount: number;

    createdAt?: Date;
    updatedAt?: Date;
}

export interface DiscussionRequestDto {
    title: string,
    description: string;
    type: PostTypes;
    category: string;
    likesCount: number;
    dislikesCount: number;
    commentsCount: number;
}

export interface DiscussionResponseDto {
    id: string;
    title: string;
    description: string;
    category: string;
    type: string;
    likesCount: number;
    dislikesCount: number;
    commentsCount: number;

    createdAt?: Date;
    updatedAt?: Date;
}