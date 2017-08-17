import { combineReducers } from 'redux';
import CommentsReducer from './reducer_comments';
import UsersReducer from './reducer_users';

const rootReducer = combineReducers({
    comments: CommentsReducer,
    users: UsersReducer
});

export default rootReducer;
