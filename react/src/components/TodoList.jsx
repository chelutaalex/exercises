import useFetch from "../hooks/useFetch.jsx";
import { useState, useCallback, useMemo } from "react";

const TodoList = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const { data, loading, error } = useFetch(url);

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    const filteredTodos = useMemo(() => {
        return (data || []).filter(todo =>
            todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [data, searchTerm]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <>
            <input
                type="text"
                placeholder="Cerca to-do..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>
                        id: {todo.id}<br />
                        title: {todo.title}<br /> 
                        status: {todo.completed ? '(Completato)' : '(Incompleto)'}<br />
                        user id: {todo.userId}<br />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;
