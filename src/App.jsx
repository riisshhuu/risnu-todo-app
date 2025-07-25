//App jsx in the biggest component and all the other components are within this component

import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { Todoinput } from "./components/Todoinput"
import { TodoList } from "./components/TodoList"


function App() {

  // const todos = [
  //   {input : "Hello! Add your first todo!", complete: true},
  //   {input: "Get the groceries!", complete: false},
  //   {input: "Learn how to web design", complete: false},
  //   {input: "Say hi to gran gran", complete: true},
  // ]

  const [todos,setTodos] = useState([
    {input : "Hello! Add your first todo!", complete: true}
  ])

  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo){
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }


  function handleCompleteTodo(index){
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val,valIndex) => {
      return valIndex !== index
    })

    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos){
    localStorage.setItem('todo-app',JSON.stringify({todos : currTodos}))
  }

  useEffect(()=>{
    if(!localStorage || !localStorage.getItem('todo-app')) {return}
    const db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
    
  }, [])


  return (
      <>
        <Header todos = {todos}/>
        <Tabs selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} todos = {todos}/>
        <TodoList handleCompleteTodo= {handleCompleteTodo} handleDeleteTodo = {handleDeleteTodo} selectedTab = {selectedTab} todos = {todos}/>
        <Todoinput handleAddTodo = {handleAddTodo}/>
      </>
     
  )
}

export default App
