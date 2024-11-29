import mongoose, { Schema } from "mongoose";
import { Discussion, Post } from "../models/Post";

const discussionSchema: Schema<Discussion> = new Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        type: {type: String, required: true},
        category: {type: String, required: true},
        likesCount: {type: Number},
        dislikesCount: {type: Number},
        commentsCount: {type: Number}
    },
    {discriminatorKey: 'type', timestamps: true}
);

const PostCollection = mongoose.model<Discussion>("Post", discussionSchema);

export default PostCollection;