import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { MessageServices } from "./message.services";
import sendResponse from "../../utils/sendResponse";
export const createMessage = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const content = req.body;
        const newMessage = await MessageServices.createMessageInDB(content);

        res.status(201).json({
            message: "Message created successfully",
            success: true,
            data: newMessage,
        });
    } catch (error) {
        next(error);
    }
}
);





const getUserMessages = catchAsync(async (req, res) => {
    const userEmail = req.headers["user-email"] as string;


    const messages = await MessageServices.getMessagesByUser(userEmail);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blogs fetched successfully",
        data: messages,
    });
});

export const messageControllers = {
    createMessage, getUserMessages
}
