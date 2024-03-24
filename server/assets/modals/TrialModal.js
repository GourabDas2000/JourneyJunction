import mongoose from "mongoose";
const createschema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

export default mongoose.model('text', createschema);