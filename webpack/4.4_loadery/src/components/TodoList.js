import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    const todoItems = props.todos.map((todoItem => {
        return (
            <Todo key={todoItem.id} todoItem={todoItem} onRemoveSelect={props.onRemoveSelect}/>
            );
    }));
    return (
        <ul className='col-md-4 list-group'>
           {todoItems} 
        </ul>
    );
}

export default TodoList