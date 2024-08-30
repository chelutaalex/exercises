import React, { useEffect, useRef, useContext, useCallback } from "react";
import { TodoContext } from "../context/TodoContext.jsx";
import useFilteredTodos from "../hooks/useFilteredTodos.jsx";
import { Link, useSearchParams } from "react-router-dom";

const TodoList = () => {
    const { todos, loading, error } = useContext(TodoContext);
    const [searchParams, setSearchParams] = useSearchParams();

    const searchTerm = searchParams.get('search') || ""; 

    const searchInputRef = useRef(null);

    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, []);

    const handleSearchChange = useCallback((e) => {
        const value = e.target.value;
        setSearchParams(value ? { search: value } : {}); 
    }, [setSearchParams]);

    const filteredTodos = useFilteredTodos(todos, searchTerm);

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
                        <Link to={`/todos/${todo.id}`}>
                            id: {todo.id}<br />
                            title: {todo.title}<br />
                            status: {todo.completed ? '(Completato)' : '(Incompleto)'}<br />
                            user id: {todo.userId}<br />
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;
