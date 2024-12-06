import { discussionModel } from "../../data/ServiceContext";
import { DiscussionRequestDto, DiscussionResponseDto } from "./Dto/PostsDto";

export const insertDiscussion = async(data: DiscussionRequestDto) => {
    const result= await discussionModel.create(data);
    
    const discussionPost: DiscussionResponseDto = {
        id: result.id,
        title: result.title,
        description: result.description,
        type: result.type,
        category: result.category,
        likesCount: result.likesCount,
        dislikesCount: result.dislikesCount,
        commentsCount: result.commentsCount,
    }
    setAuditFields(discussionPost);

    return discussionPost;
}

const setAuditFields = (blogs: DiscussionResponseDto) => {
    blogs.createdAt = new Date();
    blogs.updatedAt = new Date();
}