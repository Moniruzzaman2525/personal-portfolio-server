
import express from 'express'
import { blogController } from './blob.controller';

const router = express.Router()
router.get("/", blogController.getAllBlog);
router.get("/:blogId", blogController.getSingleBlog);
router.post("/", blogController.createBlog);
router.put("/:blogId", blogController.updateBlog);
router.delete("/:blogId", blogController.deleteBlog);

export const blogRoutes = router
