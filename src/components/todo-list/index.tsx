import React, { useState, useEffect } from "react"
import './style.css'
import { TodoProps } from "../../@types/todo"

type TodoListProps = {
    todos: TodoProps[]
    onChange: (todos: TodoProps[]) => void
}

const TodoList = ({todos, onChange}: TodoListProps) => {

    useEffect(() => {}, [todos])


    const finalizaTodo = (idTodo: number) => {
        const tmpTodos: TodoProps[] = todos.filter((todo: TodoProps) => todo.id !== idTodo);
        onChange(tmpTodos)
    }

    return (
        <div>
            <h1 id='ListaTarefas'>Lista de Tarefas</h1>
            <ul>
                {todos.map((value: TodoProps) => (
                    <li key={value.id}>
                        <input type="checkbox" onClick={() => finalizaTodo(value.id)} />{value.titulo}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
