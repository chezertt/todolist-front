import React, {useEffect, useState} from 'react';
import Todo from "./components/todo/Todo";
import CreateTodo from "./components/todo/CreateTodo";
import TodoService from "./components/API/TodoService";
import MySelect from "./components/UI/select/MySelect";

const App = () => {

    const [todos, setTodos] = useState([])

    const [selectedSort, setSelectedSort] = useState('default')

    const completeTodo = (id) => {
        TodoService.completeTodoById(id).then(fetchTodos)
    }

    const deleteTodo = (id) => {
        TodoService.deleteTodoById(id).then(fetchTodos)
    }

    async function fetchTodos() {
        const todosFromBackend = await TodoService.getAll()
        setTodos(todosFromBackend)
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    const sortTodos = (fieldToSort) => {
        setSelectedSort(fieldToSort)
        if ("default" === fieldToSort) {
            setTodos([...todos].sort((t1, t2) => t2.id - t1.id))
        } else if ("name" === fieldToSort) {
            setTodos([...todos].sort((t1, t2) =>
                t1.name.localeCompare(t2.name)))
        } else if ("priority" === fieldToSort) {
            setTodos([...todos].sort((t1, t2) => {
                if (t1.priority === t2.priority) {
                    return 0
                } else if (t1.priority === 'Высокий' || t2.priority === 'Низкий') {
                    return -1
                } else {
                    return 1
                }
            }))
        }
    }

    return (
        <div className='text-white w-3/5 py-10 mx-auto'>
            <h1 className='text-3xl font-bold text-center mb-10'>Список дел</h1>
            <CreateTodo fetchTodos={fetchTodos}/>
            {todos.map(todo => <Todo key={todo.id}
                                     todo={todo}
                                     completeTodo={completeTodo}
                                     deleteTodo={deleteTodo}/>)}
            {todos.length > 0 && <div className='flex items-center mt-10'>
                <h1 className='text-xl font-bold text-center mb-5 mr-2'>Сортировка:</h1>
                <MySelect
                    defaultValue="Сортировка по"
                    options={[
                        {value: 'default', name: 'По умолчанию'},
                        {value: 'name', name: 'По названию'},
                        {value: 'priority', name: 'По приоритету'}
                    ]}
                    value={selectedSort}
                    onChange={sortTodos}
                />
            </div>}
        </div>
    );
};

export default App;