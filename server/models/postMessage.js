import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    // each post needs to have
    title: String,
    message: String,
    creator: String,
    tags: [String],
    upvote: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

});

var PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;
