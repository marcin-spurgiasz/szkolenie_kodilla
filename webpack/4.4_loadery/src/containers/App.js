import React from 'react';
import uuid from 'uuid';

import Title from '../components/Title';
import TodoList from '../components/TodoList';

import style from './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{id: 1, text: 'foo'}, {id: 2, text: 'foo1'}]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id){
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title numberOfTodos={this.state.data.length}/>
                <TodoList onRemoveSelect = {removeItem => this.removeTodo(removeItem)} todos={this.state.data}/>
            </div>
        );
    }
}

export default App;