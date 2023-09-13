import axios from 'axios';

export default class TodoService {
    static async getAll() {
        try {
            // const response = await axios.get('http://localhost:8080/todos')
            const response = await axios.get('http://91.201.114.41:8080/todos')
            console.log("Got all todos:\n", response.data)
            return response.data
        } catch (e) {
            console.log(e)
            return []
        }
    }

    static async saveNewTodo(todo) {
        try {
            console.log("Trying to save new todo:\n", todo)
            // await axios.post('http://localhost:8080/todos', todo)
            await axios.post('http://91.201.114.41:8080/todos', todo)
        } catch (e) {
            console.log(e)
        }
    }

    static async deleteTodoById(id) {
        try {
            console.log("Trying to delete todo by id = ", id)
            // await axios.delete('http://localhost:8080/todos/' + id)
            await axios.delete('http://91.201.114.41:8080/todos/' + id)
        } catch (e) {
            console.log(e)
        }
    }
}