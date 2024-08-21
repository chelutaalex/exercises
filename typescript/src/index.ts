import {Todo} from "./types"

let todos: Todo[] = [];

function addTodo(title:string) {
    
    const todo:Todo= {
        id:todos.length + 1,
        title:title,
        completed:false
    }
    
    todos.push(todo)
}

addTodo("lavare i piatti")
addTodo("Portare fuori il cane")
console.log(todos)