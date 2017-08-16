export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        payload: {
            text: comment.text,
            id: uuid.v4()
        }
    }
}

export function editComment(comment) {
    return {
        type: EDIT_COMMENT,
        payload: {
            text: comment.text,
            id: comment.id
        }
    }
}

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        payload: {
            id
        }
    }
}

export function thumbUpComment(comment) {
    return {
        type: THUMB_UP_COMMENT,
        payload: {
            id: comment.id,
            thumb: comment.thumb
        }
    }
}

export function thumbDownComment(comment) {
    return {
        type: THUMB_DOWN_COMMENT,
        payload: {
            id: comment.id,
            thumb: comment.thumb
        }
    }
}