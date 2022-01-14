import React from "react";
import { useState } from "react";
import { TextInput } from 'react-native'
import TodoList from "./TodoList";

const INITIAL_STATE = [
    {id: 1, title: 'Задача 1', isComplete: false},
    {id: 2, title: 'Задача 2', isComplete: false}
];

const Todo = () => {
    const [text, setText] = useState('')
    const [todoItems, setTodoItems] = useState(INITIAL_STATE)   
    const changeText = text => setText(text);      

    const addTodoItem = () => {
        if (text.length > 0) {
            setTodoItems([
                ...todoItems,
                { id: Math.floor(Math.random() * 1001), title: text, isComplete: false}
            ])
        }
        setText('')
    }
    const completeTodoItem = id => {      
        const result = todoItems.map(todoItem => {
            if (todoItem.id === id) {
                todoItem.isComplete = !todoItem.isComplete
                return todoItem
            }
            return todoItem;
        })
        setTodoItems(result);
    } 
           
    const removeTodoItem = id => setTodoItems(
        todoItems.filter(todoItem => todoItem.id !== id)
    )
    return (
        <>
            <TodoList 
                todoItems={todoItems}
                completeTodoItem={completeTodoItem}
                removeTodoItem={removeTodoItem}
            />
            <TextInput 
                placeholder="Добавить задачу"
                value={text}
                onChangeText={changeText}
                onSubmitEditing={addTodoItem}
            />
        </>
    )
}
export default Todo;