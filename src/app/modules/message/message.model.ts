import { model, Schema } from "mongoose";
import { TMessage } from "./message.interface";


const messageSchema = new Schema<TMessage>(
    {

        name: {
            type: String,
            required: [true, 'name is required'],
        },
        email: {
            type: String,
            required: [true, 'email is required'],
        },
        subject: {
            type: String,
            required: [true, 'subject is required'],
        },
        message: {
            type: String,
            required: [true, 'message is required'],
        },
    },
    {
        timestamps: true,
    }
);

const Message = model<TMessage>("message", messageSchema);

export default Message;
