import React from 'react';
import style from '../containers/App.css'

const Todo = ({todoItem, todoId, onRemoveSelect}) => {
    return (
        <li className="list-group-item">
            <div className="media">
                <div className="media-left">
                    {todoId} 
                </div>
                <div className="media-body">
                    <h5 className="mt-0 mb-1">Task</h5>
                    {todoItem.text}
                </div>
                <div className="media-body">
                    <h5 className="mt-0 mb-1">Priority</h5>
                    {todoItem.priority}
                </div>
                <div className="media-right">
                    <button className="btn btn-default" onClick={() => onRemoveSelect(todoItem.id)}>Remove</button>
                </div>
            </div>
        </li>
    );
}

export default Todo;