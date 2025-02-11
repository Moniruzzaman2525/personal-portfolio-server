import { model, Schema } from "mongoose";
import { TBlog } from "./blog.interface";


const blogSchema = new Schema<TBlog>(
  {

    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    user: {
      type: String,
      required: [true, 'User is required'],
    },
    category: {
      type: String,
      enum: ['Technology', 'Business', 'Lifestyle', 'Health'],
      required: [true, 'Category is required'],
    }
  },
  {
    timestamps: true,
  }
);

const Blogs = model<TBlog>("blogs", blogSchema);

export default Blogs;
