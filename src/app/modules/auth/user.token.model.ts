import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
});

const TokenModel = mongoose.model("Token", tokenSchema);
export default TokenModel;
