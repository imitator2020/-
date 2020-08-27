const TODOS_KEY = 'todos_key'
export default{

    // getTodos(){
    //    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
    // },
    // saveTodos(value) {
    //     localStorage.setItem(TODOS_KEY, JSON.stringify(value))
    // },
    readTodos() {
        return JSON.parse(window.localStorage.getItem('todos_key') || '[]')
    },
    saveTodos(todos) {
        localStorage.setItem('todos_key', JSON.stringify(todos))
    }
}