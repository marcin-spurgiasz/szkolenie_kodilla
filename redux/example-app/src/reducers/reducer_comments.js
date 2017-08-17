import { ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_DOWN_COMMENT, THUMB_UP_COMMENT } from '../actions/actions';
export default (state = [], action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.payload, ...state, ]
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if (comment.id === action.payload.id) {
                    return { ...comment, votes: comment.votes + 1 }
                }
                return comment;
            });
        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if (comment.id === action.payload.id) {
                    return { ...comment, votes: comment.votes - 1 }
                }
                return comment;
            });
        default:
            return state;
    }
}