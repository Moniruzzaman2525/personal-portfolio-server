import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { blogServices } from "./blog.services";


const getAllBlog = catchAsync(async (req, res) => {
    const query = req.query;
    const result = await blogServices.getAllBlog(query);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blogs fetched successfully",
        meta: result.meta,
        data: result.data,
    });
});


const getUserBlog = catchAsync(async (req, res) => {
    const query = req.query;
    const userEmail = req.headers["user-email"] as string;
    const result = await blogServices.getUserBlogs(query, userEmail);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blogs fetched successfully",
        meta: result.meta,
        data: result.data,
    });
});


const getSingleBlog = catchAsync(async (req, res) => {
    const blogId = req.params.blogId;
    const result = await blogServices.getSingleBlog(blogId);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog fetched successfully",
        data: result,
    });
});


const createBlog = catchAsync(async (req, res) => {
    const blogData = req.body;
    const result = await blogServices.createBlog(blogData);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Blog created successfully",
        data: result,
    });
});


const updateBlog = catchAsync(async (req, res) => {
    const blogId = req.params.blogId;
    const updateData = req.body;
    const result = await blogServices.updateBlog(blogId, updateData);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog updated successfully",
        data: result,
    });
});


const deleteBlog = catchAsync(async (req, res) => {
    const blogId = req.params.blogId;
    await blogServices.deleteBlog(blogId);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog deleted successfully",
    });
});

export const blogController = {
    getAllBlog,
    getSingleBlog,
    createBlog,
    updateBlog,
    deleteBlog,
    getUserBlog
};
