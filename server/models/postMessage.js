import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    // each post needs to have
    title: String,
    message: String,
    creator: String,
    name: String,
    tags: [String],
    upvoteList: {
        type: [String],
        default: [],
    },
    downvoteList: {
        type: [String],
        default: [],
    },
    upvote: {
        type: Number,
        default:0,
    },
    comments: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },

});

var PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;