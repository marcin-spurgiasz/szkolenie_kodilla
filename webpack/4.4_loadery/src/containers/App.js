import React, { Component } from 'react';
import uuid from 'uuid';

import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm'

import style from './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{id: 1, text: 'foo', priority: 2}, {id: 2, text: 'foo1', priority: 5}]
        };
    }
    addTodo(val) {
        const todo = {
            text: val.text,
            priority: val.priority,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title numberOfTodos={this.state.data.length}/>
                <TodoForm onSubmitClick={formResult => this.addTodo(formResult)}/>
                <TodoList onRemoveSelect = {removeItem => this.removeTodo(removeItem)} todos={this.state.data}/>
            </div>
        );
    }
}

export default App;