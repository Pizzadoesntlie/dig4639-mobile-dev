import React from 'react';
//import logo from './logo.svg';
import './App.css';
import todoList from './todoList.json'

// filter the list based on a checkbox
//add an input form to allow creating TODO items with content & priority
//have each item be able to remove itself using a fucntion passed in from the parent
function TodoItem(props) {
return <p className= "card" onClick={() => props.removeTask(props.id)}>{props.content}</p>
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList, //intitialize current value of todoList
      hideCompletedItems:false
    }
    this.currentId = 4;
  }
  addTask(e) {
    console.log(this.refs.taskContent)
    let todoList = this.state.todoList
    todoList.push(
      {"id":this.currentId, "completed":true, "priority": 1, "content": this.refs.taskContent.value})
    this.currentId++
    this.setState({todoList})
  }
  removeTask(id) {
    let todoList = this.state.todoList;
    todoList = todoList.filter((v) => v.id !== id)
    this.setState({todoList})
  }
  render() {
    return (
      <>
    <input type="text" ref="taskContent" />
    <input type="button" value="Add Task" onClick={(e) => this.addTask(e)} />
    <input ref="hideCompletedItemsCheckbox" type="checkbox" id="hideCompletedItems" 
    name="hideCompletedItems" value="hideCompletedItems"
    onChange={(e) => this.setState({hideCompletedItems: e.target.checked})}/>
    <label for="hideCompletedItems"> I have a bike</label><br></br>
    {((this.state.hideCompletedItems) ? this.state.todoList
    .filter((v) => !v.completed) : this.state.todoList)
    .map((v) => <TodoItem id={v.id} removeTask={(id) => this.removeTask(id)} content={v.content} //pass attributes
    priority={v.priority} 
    completed={v.completed}/>)}
    </>)
  }
}
function App(props) {
  return (
  <TodoList/>
  )
}

export default App;
