import React from 'react';
import Check from "./Check";
import {BiTrash} from "react-icons/bi";

const Todo = ({todo, completeTodo, deleteTodo}) => {
    return (
        <div className='flex items-center justify-between mb-3 bg-gray-800 rounded-3xl p-4 w-full'>
            <button className='flex items-center hover:text-blue-400' onClick={() => completeTodo(todo.id)}>
                <Check isCompleted={todo.isCompleted}/>
                <div className={`${todo.isCompleted ? 'line-through' : ''}`}>
                    {todo.name} (Приоритет: {todo.priority})
                </div>
            </button>
            <button onClick={() => deleteTodo(todo.id)}>
                <BiTrash size={23} className='hover:text-red-500'/>
            </button>
        </div>
    );
};

export default Todo;