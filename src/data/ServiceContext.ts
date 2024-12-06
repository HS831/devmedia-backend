import mongoose, { Schema } from "mongoose";
import { BlogsSchema, DiscussionSchema, PostSchema } from "../models/Post";

const postSchema: Schema<PostSchema> = new Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        category: {type: String, required: true},
        type: {type: String, required: true},
        likesCount: {type: Number, default: 0},
        dislikesCount: {type: Number, default: 0},
        commentsCount: {type: Number, default: 0}
    },
    {discriminatorKey: 'type', timestamps: true}
);

export const baseModel = mongoose.model<PostSchema>("Post", postSchema);

export const discussionModel = baseModel.discriminator<DiscussionSchema>(
    "Discussion",
    new Schema({}, {timestamps: true})
);

export const blogsModel = baseModel.discriminator<BlogsSchema>(
    "Blogs",
    new Schema({}, { timestamps: true })
  );