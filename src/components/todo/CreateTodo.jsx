import React, {useState} from 'react';
import MySelect from "../UI/select/MySelect";
import TodoService from "../API/TodoService";

const CreateTodo = ({fetchTodos}) => {

    const [name, setName] = useState('')
    const [priority, setPriority] = useState('Средний')

    function isBlankString(str) {
        return (!str || /^\s*$/.test(str));
    }

    const addTodo = (name) => {
        if (isBlankString(name)) {
            return
        }
        const newTodo = {
            "name": name,
            "isCompleted": false,
            "priority": priority
        }
        TodoService.saveNewTodo(newTodo).then(fetchTodos)
        setName('')
    }

    return (
        <div className='flex items-center justify-between mb-6 border-gray-800 border-2 rounded-3xl p-4 w-full'>
            <input type='text'
                   onChange={e => setName(e.target.value)}
                   value={name}
                   onKeyPress={e => e.key === 'Enter' && addTodo(name)}
                   className='bg-transparent w-full border-none outline-none'
                   placeholder='Введите название новой задачи'
            />
            <div>
                <h1>Приоритет задачи:</h1>
                <MySelect
                    defaultValue="Приоритет задачи"
                    options={[
                        {value: 'Высокий', name: 'Высокий'},
                        {value: 'Средний', name: 'Средний'},
                        {value: 'Низкий', name: 'Низкий'}
                    ]}
                    value={priority}
                    onChange={setPriority}
                />
            </div>
        </div>
    );
};

export default CreateTodo;