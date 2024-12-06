import { Request, Response, NextFunction } from "express";
import { PostTypes } from "../enums/PostTypes";
import { insertBlogs } from "../dal/posts/blogsDAL";
import { insertDiscussion } from "../dal/posts/discussionDAL";



export const createNewPost = async(request: Request, response: Response, next: NextFunction) => {
    try {
        const body = request.body;
        let res;
        switch(body.type) {
            case PostTypes[PostTypes.Discussion]:
                res = await insertDiscussion(body);
                break;
            case PostTypes[PostTypes.Blogs]:
                res = await insertBlogs(body);
                break;
        }
        response.status(201).json({ 
            message: 'Document created successfully',
            data: res
        })
    }
    catch(err) {
        response.status(500).json({
            error: err
        })
    }
}