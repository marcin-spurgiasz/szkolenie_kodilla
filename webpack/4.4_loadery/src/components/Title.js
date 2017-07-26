import React, { Component } from 'react';

const Title = (props) => {
    return (
        <div>
            <h1>TODO</h1>
            <p>Lista todosow do zrobienia: {props.numberOfTodos}</p>
        </div>
    )
}

export default Title;