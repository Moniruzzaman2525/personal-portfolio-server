import { model, Schema } from "mongoose";
import { TMessage } from "./message.interface";

const messageSchema = new Schema<TMessage>(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
        },
        subject: {
            type: String,
            required: [true, "Subject is required"],
        },
        user: {
            type: String,
            required: [true, "user is required"],
        },
        message: {
            type: String,
            required: [true, "Message content is required"],
        },
    },
    {
        timestamps: true,
    }
);

const Message = model<TMessage>("Message", messageSchema);

export default Message;
