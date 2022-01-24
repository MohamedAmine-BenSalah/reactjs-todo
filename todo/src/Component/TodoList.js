import React from "react"
import TodoForm  from "./TodoForm"
export default class TodoList extends React.Component{
    state= {
        todos : [],
    }
    addTodos = (todo) => {
        this.setState({
            todos : [todo, ...this.state.todos]
        })
    }
    render() {
        return (
            <div>
                <TodoForm onSubmit={this.addTodos} />
                <div>{JSON.stringify(this.state.todos)}</div>
            </div>
        )
    } 
}