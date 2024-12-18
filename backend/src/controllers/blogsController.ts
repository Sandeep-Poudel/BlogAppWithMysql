const asyncHandler = require('express-async-handler');
import { Request, Response } from 'express';
import Blog from "../models/Blogs";

const getAllBlogs = asyncHandler(async (req: Request, res: Response) => {
    try {
        const blogs = await Blog.findAll();
        res.status(200).json(blogs);
    } catch (err: any) {
        res.status(404).json({ message: err.message });
    }
});

const createBlog = asyncHandler(async (req: Request, res: Response) => {
    const { title, description, author, pic } = req.body;

    if (!title || !description || !author) {
        res.status(400);
        throw new Error("Please fill all the fields");
        return;
    }

    const blogData = {
        title: title as string,
        description: description as string,
        author: author as string,
        pic: pic || `https://picsum.photos/600/400?seed=${Math.random() * 100 + 1}`,
    };

    const blog = await Blog.create(blogData);
    res.status(201).json(blog);
});

const getBlog = asyncHandler(async (req: Request, res: Response) => {
    console.log(req.params);
    const blog = await Blog.findByPk(req.params.id);
    if (blog) {
        res.status(200).json(blog);
    } else {
        res.status(404);
        throw new Error("Blog not found");
    }
});

const updateBlog = asyncHandler(async (req: Request, res: Response) => {
    const blog = await Blog.findByPk(req.params.id);
    if (blog) {
        blog.title = req.body.title || blog.title;
        blog.description = req.body.description || blog.description;
        blog.author = req.body.author || blog.author;

        const updatedBlog = await blog.save();
        res.status(202).json(updatedBlog);
    } else {
        res.status(404);
        throw new Error("Blog not found");
    }
});

const deleteBlog = asyncHandler(async (req:Request,res:Response)=>{
    const blog = await Blog.findByPk(req.params.id);
    try{
        if(blog){
            await blog.destroy();
            res.status(200).json({message:'Blog deleted successfully'});
        }
    }catch(err:any){
        res.status(404).json({message:err.message});
    }

})




module.exports = { getAllBlogs, createBlog,getBlog,deleteBlog,updateBlog };