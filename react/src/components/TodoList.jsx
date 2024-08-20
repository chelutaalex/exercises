import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import useFetch from "../hooks/useFetch.jsx";
import useFilteredTodos from "../hooks/useFilteredTodos";

const TodoList = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const { data, loading, error } = useFetch(url);
    const [searchTerm, setSearchTerm] = useState("");

    const searchInputRef = useRef(null);

    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, []);

    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    const filteredTodos = useFilteredTodos(data || [], searchTerm);

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
                ref={searchInputRef} 
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
