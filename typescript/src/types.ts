export interface Todo {
    id:number,
    title:string,
    completed:boolean,
    userId?:number,
    metadata?:string|object,
    status?: TodoStatus
}

export interface UserInterface {
    id:number,
    name:string,
    email?:string,
    todos?:ReadonlyArray<Todo>
} 

export interface TodoWithMetadata extends Todo {
    metadata?:any
}

export interface Project {
    id: number;
    name: string;
    users: User[]; 
    todos: Todo[]
}

export enum TodoStatus {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
}

export type TodoRecord = Record<number, Todo>;