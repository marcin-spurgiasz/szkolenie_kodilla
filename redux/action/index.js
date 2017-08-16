const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(comment) {
    return {
        type: ADD_COMMENT,
        text: comment.text,
        id: uuid.v4()
    }
}

function editComment(comment) {
    return {
        type: EDIT_COMMENT,
        text: comment.text,
        id: comment.id
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function thumbUpComment(comment) {
    return {
        type: THUMB_UP_COMMENT,
        id: comment.id,
        thumb: comment.thumb
    }
}

function thumbDownComment(comment) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: comment.id,
        thumb: comment.thumb
    }
}