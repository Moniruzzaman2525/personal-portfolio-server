
import express from 'express'
import { messageControllers } from './message.controllers';

const router = express.Router()
router.post("/", messageControllers.createMessage);
router.get("/", messageControllers.getUserMessages);

export const messageRoutes = router
