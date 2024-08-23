import {Todo} from "./types"
import {User} from "./types"

let todos: Todo[] = [];

let users: User[] = [
    { id: 1, name: 'Marco' },
    { id: 2, name: 'Luca' }
];

function addTodo(title:string) {
    
    const todo:Todo= {
        id:todos.length + 1,
        title:title,
        completed:false
    }
    
    todos.push(todo)
}

function assignTodoToUser(todoId: number, userId: number): void {
    const todo = todos.find(t => t.id === todoId);
    
    if (todo) {
        todo.userId = userId;
        console.log(`Utente:${userId} assegnato a todo: ${todoId}`);
    } else {
        console.error(`L'id:${todoId} non esiste`);
    }
}

function getUserTodos(userId:number): Todo[] {
    return todos.filter(todo => todo.userId ===userId)
}

addTodo("lavare i piatti")
addTodo("Portare fuori il cane")

assignTodoToUser(1,2)
assignTodoToUser(2,2)

const user2 = getUserTodos(2)

console.log(user2)
console.log(todos)