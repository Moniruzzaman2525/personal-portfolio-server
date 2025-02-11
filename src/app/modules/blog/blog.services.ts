import QueryBuilder from "../../builder/QueryBuilder";
import Blogs from "./blog.modal";


const getAllBlog = async (query: Record<string, unknown>) => {
    const blogQuery = new QueryBuilder(Blogs.find(), query)
        .search(["title"])
        .filter()
        .sort()
        .paginate()
        .fields();

    const data = await blogQuery.modelQuery;
    const meta = await blogQuery.countTotal();

    return {
        meta,
        data,
    };
};

const getUserBlogs = async (query: Record<string, unknown>, userEmail: string) => {
    const blogQuery = new QueryBuilder(Blogs.find({ user: userEmail }), query)
        .search(["title"])
        .sort()
        .paginate()
        .fields();

    const data = await blogQuery.modelQuery;
    const meta = await blogQuery.countTotal();

    return {
        meta,
        data,
    };
};



const getSingleBlog = async (id: string) => {
    const result = await Blogs.findById(id);
    return result;
};

const createBlog = async (blogData: Record<string, unknown>) => {
    const newBlog = await Blogs.create(blogData);
    return newBlog;
};


const updateBlog = async (id: string, updateData: Record<string, unknown>) => {
    const updatedBlog = await Blogs.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    return updatedBlog;
};

const deleteBlog = async (id: string) => {
    await Blogs.findByIdAndDelete(id);
};

export const blogServices = {
    getAllBlog,
    getSingleBlog,
    createBlog,
    updateBlog,
    deleteBlog,
    getUserBlogs
};
