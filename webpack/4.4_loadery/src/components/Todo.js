import React from 'react';
import style from '../containers/App.css'

const Todo = ({todoItem, onRemoveSelect}) => {
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    {todoItem.id} 
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {todoItem.text}
                    </div>
                </div>
                <div className="media-right">
                    <button className="btn btn-default" onClick={() => onRemoveSelect(todoItem.id)}>Remove</button>
                </div>
            </div>
        </li>
    );
}

export default Todo;