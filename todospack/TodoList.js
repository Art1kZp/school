import React from "react";
import {} from 'react-native';
import TodoItem from "./TodoItem";

const TodoList = ({todoItems, completeTodoItem, removeTodoItem}) => (
    <>
        {todoItems.map(item => (
            <TodoItem
                key={item.id}
                title={item.title}
                isComplete={item.isComplete}
                complete={() => completeTodoItem(item.id)}
                remove={() => removeTodoItem(item.id)}
            />    
        ))}
    </>  
)
export default TodoList; 