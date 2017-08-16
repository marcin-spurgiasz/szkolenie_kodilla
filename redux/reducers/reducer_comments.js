import {ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_DOWN_COMMENT, THUMB_UP_COMMENT} from '../actions/'

export function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return { ...state, comments: action.payload }
        case REMOVE_COMMENT:
            return {...state,
                comments: state.comments.filter(comment => comment.id !== action.id)
            }
        default:
            return state;
    }
}