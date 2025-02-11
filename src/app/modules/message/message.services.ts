import Message from "./message.model";

const createMessageInDB = async (content: string) => {
    const newMessage = await Message.create(content)

    return newMessage
}

const getMessagesByUser = async (userEmail: string) => {
    return await Message.find({ user: userEmail })
}

export const MessageServices = {
    createMessageInDB, getMessagesByUser
}
