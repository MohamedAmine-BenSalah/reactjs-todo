import React from "react"
import shortid from "shortid"
import Todo from "./Todo"

export default class TodoListForm extends React.Component {
    state={
        text  : "",
        todos : [],
        todosToShow : "all"
    }
    handleChange = e => {
        const {name,value} = e.target;
        this.setState({
            [name] : value,
        })
    }
    addTodos = todo => {
        const newTodos = [todo,...this.state.todos]
        this.setState({
            todos : newTodos
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.addTodos({
            text: this.state.text,
            id : shortid.generate(),
            complete : false,
        });
        this.setState({
            text : ""
        })
    }
    toggleComplete = id => {
        this.setState({
            todos : this.state.todos.map(todo=>{
                if(todo.id === id ) {
                    return {
                        ...todo,
                        complete : !todo.complete

                    }
                }
                return todo;
            })
        })
    }
    view = (s) => {
        this.setState({
            todosToShow : s
        })
    }
    onDelete = (id) => {
        this.setState({
            todos : this.state.todos.filter(todo=>todo.id !== id)
        })
    }
    deleteCompletedTodos = () => {
        this.setState({
            todos : this.state.todos.filter(todo=>!todo.complete)
        })
    }
    render() {
        let todos = [];
        if(this.state.todosToShow==="all") {
            todos = this.state.todos

        }
        else if (this.state.todosToShow==="active") {
            todos = this.state.todos.filter(todo=>!todo.complete)
        }
        else if (this.state.todosToShow === "complete") {
            todos  = this.state.todos.filter(todo=>todo.complete)
        }

        return (
            <div>
             <form>
                 <input type="text" onChange={this.handleChange} value={this.state.text}
                 placeholder="todos.." name="text" />
                 <button type="submit" onClick={this.handleSubmit} >add Todo!</button>
            </form>
            <div>{  todos.map(todo=>{
                return(
                    <Todo onDelete={()=>this.onDelete(todo.id)} toggleComplete={()=>this.toggleComplete(todo.id)} key={todo.id} todo={todo} />
                )
            })  }</div>
            <div> active todos : {this.state.todos.filter(todo=>!todo.complete).length}</div>
            <div>
                <button onClick={()=>this.view('all')} >All</button>
                <button onClick={()=>this.view('active')} >Active</button>
                <button onClick={()=>this.view('complete')} >Complete</button>
               <div> { this.state.todos.some(todo=>todo.complete) ? <button onClick={this.deleteCompletedTodos} >Delete all completed todos !</button> : null }</div>
            </div>
            </div>

        )
    }
}