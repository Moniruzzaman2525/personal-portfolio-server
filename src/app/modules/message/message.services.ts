import Message from "./message.model";


const createMessageInDB = async (userEmail: string, content: string) => {
    const newMessage = new Message({
        user: userEmail,
        content,
        createdAt: new Date(),
    });

    return await newMessage.save();
}

const getMessagesByUser = async (userEmail: string) => {
    return await Message.find({ user: userEmail }).sort({ createdAt: -1 });
}

export const MessageServices = {
    createMessageInDB, getMessagesByUser
}
