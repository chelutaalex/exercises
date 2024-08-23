import {Todo} from "./types"
import {User} from "./types"

let todos: Todo[] = [];

let users: User[] = [
    { id: 1, name: 'Marco' },
    { id: 2, name: 'Luca' }
];

function addTodo(title:string,metadata:string|object) {
    
    const todo:Todo= {
        id:todos.length + 1,
        title:title,
        completed:false,
    }
    
    todos.push(todo)
}

function updateTodo(todo:Todo, updates:Partial<Todo>) {
    return {...todo,...updates}
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

function error(message:string): never {
    throw new Error(message)
}

function parseInput(input:unknown) {
    if(typeof input === "string") {
        return input;
    } else if(typeof input === "number") {
        return input.toString();
    } else {
        return error("Il tipo di dato non corrisponde");
    }
}

const todoTest:Todo = {id:40,title:"Test",completed:false,metadata:"High priority"}
const updateTodo1 = updateTodo(todoTest,{completed:true})
const userTest:User = {id:50,name:"Marco",todos:[{id:40,title:"Test",completed:false,metadata:"High priority"}]}

console.log(userTest)