import React, {Component} from 'react'
import './App.css'
import TodoItem from './components/Todoitem'

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      input:"",
      todolist:[]
    }
  }

  inputchange= (e)=>{
    this.setState({
      input:e.target.value
    })
  }

  addlist = (e)=>{
    e.preventDefault()
    if(this.state.input.length > 0){
    this.setState({
      input:'',
      todolist:[...this.state.todolist, this.state.input]
    })}
  }

  updateItem=(value, i)=>{
    let arr = this.state.todolist
    arr.splice(i, 1, value)
    this.setState({
      todolist:arr
    })
  }

  deleteI=(i)=>{
    let arr = this.state.todolist
    arr.splice(i, 1)
    this.setState({
      todolist:arr
    })
  }

  render(){
    return <>

    <h1>To Do List</h1>
    <form onSubmit={this.addlist}>
      <input type="text" onChange={this.inputchange} value={this.state.input}/>
      <button>ADD</button>
    </form>
    <p>{this.state.input}</p>

    <div className='todolist'>
      <h2>L I S T</h2>
      {
        this.state.todolist.map((e,i)=>{
          return <TodoItem  e={e} i={i} deleteI={this.deleteI} updateItem={this.updateItem}/>
        })
      }
    </div>

    </>
  }
}
