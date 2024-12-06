import { blogsModel } from "../../data/ServiceContext";
import { BlogsRequestDto, BlogsResponseDto } from "./Dto/PostsDto";

export const insertBlogs = async(data: BlogsRequestDto) => {
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
        isImported: result.isImported
    }
    setAuditFields(blogs);

    return blogs;
}

const setAuditFields = (blogs: BlogsResponseDto) => {
    blogs.createdAt = new Date();
    blogs.updatedAt = new Date();
}