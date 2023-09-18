'use client'
import { todo } from 'node:test';
import React, {  useState,useRef } from 'react'





export default function Page() {
  const [text,setText] = useState('')
  const [todos,setTodos] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null)

  
  //inputのテキスト変更を感知して配列に格納
  const inputChange =(e: { target: { value: React.SetStateAction<string> } })=>{
    setText(e.target.value)
  }

  //todoを追加する
  const addTodo = () =>{
    if(text.length <= 0){
      return
    }
    console.log(todos)
    setTodos([...todos, text])
    //追加後にvalueを空にする
    setText('')
  }

  const deleteTodo =()=>{
    console.log('hello')
  }




  return (
    <>
        <h1>本日の予定</h1>
        <input type="text" value={text} onChange={inputChange} ref={inputRef}  />
        <button onClick={addTodo}>追加</button>


        <h2>やること</h2>
        <ul>
          {todos.map((item,index)=>(
            <li key={index} id={`${index + 1}`}>
              {item}
              <button onClick={deleteTodo}>削除</button>
            </li>
          ))} 
        </ul>

    </>

  )
}