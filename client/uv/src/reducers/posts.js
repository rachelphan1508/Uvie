import { CREATE, FETCH_ALL, COMMENT, FETCH_POST, UPDATE, DELETE, UPVOTE, DOWNVOTE } from '../constants/actionTypes.js';


export default (state = [], action) => {
    switch (action.type) {
        case FETCH_POST:
            return [... state, action.payload.post];
        case FETCH_ALL:
            return action.payload;
        case CREATE: 
            return [... state, action.payload];
        case UPDATE:
        case UPVOTE:
        case DOWNVOTE:
            return state.map((post)=> post._id === action.payload._id ? action.payload : post);
        case COMMENT:
            return state.map((post) => 
                action.payload._id === post._id? action.payload : post
            )
        case DELETE:
            return state.filter((post) => post._id !== action.payload);
        default:
            return state;
    }
}