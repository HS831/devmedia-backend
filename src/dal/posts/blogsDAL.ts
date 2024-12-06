import { baseModel, blogsModel, discussionModel } from "../../data/ServiceContext";
import { BlogsRequestDto, BlogsResponseDto, DiscussionResponseDto } from "./Dto/PostsDto";

export const insertBlogs = async(data: BlogsRequestDto): Promise<BlogsResponseDto> => {
    const result= await blogsModel.create(data);
    
    const blogs: BlogsResponseDto = {
        id: result.id,
        title: result.title,
        description: result.description,
        type: result.type,
        category: result.category,
        likesCount: result.likesCount,
        dislikesCount: result.dislikesCount,
        commentsCount: result.commentsCount,
        isImported: result.isImported,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt
    }
    return blogs;
}

export const getPosts = async(type: any): Promise<BlogsResponseDto[] | DiscussionResponseDto[]> => {
    switch(type) {
        case 'Discussion':
            const discussions: DiscussionResponseDto[] = await discussionModel.find({});
            return discussions;
        case 'Blogs':
            const blogs: BlogsResponseDto[] = await blogsModel.find({});
            return blogs;
    }

    return [];
}