import {Todo, Project, UserInterface, TodoStatus} from "./types"
import { User } from "./User";
import { filterTodos, PartialTodo } from "./utils";

let todos: Todo[] = [];

function addTodo(title:string,metadata:string|object) {
    
    const todo:Todo= {
        id:todos.length + 1,
        title:title,
        completed:false,
        status:TodoStatus.InProgress
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

function getTodoSummary(todo:Todo):[string,boolean] {
    return[todo.title,todo.completed]
}

function createProject(id: number, name: string, users: User[], todos: Todo[]): Project {
  
    const project: Project = {
        id: id,
        name: name,
        users: users,
        todos: todos
    };
    
    return project; 
}

const todoTest:Todo = {id:40,title:"Test",completed:false,metadata:"High priority"}
const updateTodo1 = updateTodo(todoTest,{completed:true})
const userTest:UserInterface = {id:50,name:"Marco",todos:[{id:40,title:"Test",completed:false,metadata:"High priority"}]}
const usersTest: UserInterface[] = [
    { id: 1, name: 'Marco' },
    { id: 2, name: 'Luca' }
];

const todosTest: Todo[] = [
    { id: 1, title: 'Fare i compiti', completed: false },
    { id: 2, title: 'Cucinare', completed: true }
];

const updateTodoStatus = (todoId:number, status:TodoStatus) => {
    const todo = todosTest.find(t => {
        return t.id == todoId;
    })
    if(!todo) {
        throw new Error("todo not find");
    } 

    todo.status = status;
}

const user1 = new User(1, "Marco", "marco@example.com");
const user2 = new User(2, "Luca", "luca@example.com");

const todo1: Todo = { id: 1, title: "Fare la spesa", completed: false, status: TodoStatus.Pending };
const todo2: Todo = { id: 2, title: "Fare sport", completed: true, status: TodoStatus.InProgress };
const todo3: Todo = { id: 3, title: "Pulire casa", completed: false, status: TodoStatus.Pending };

user1.addTodo(todo1);
user1.addTodo(todo2);
user2.addTodo(todo3);

export function updatePartialTodo(todoId: number, updates: PartialTodo): Todo | undefined {
    const todo = todos.find(t => t.id === todoId);

    if (todo) {
        Object.assign(todo, updates);
        return todo;
    } else {
        console.error(`Todo con id ${todoId} non trovato`);
        return undefined;
    }
}

