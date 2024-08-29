import React, { useState, useCallback, useMemo, useRef, useEffect, useContext } from "react";
import { TodoContext } from "../context/TodoContext.jsx";
import useFilteredTodos from "../hooks/useFilteredTodos.jsx";
import { Link } from "react-router-dom";

const TodoList = () => {
    const { todos, loading, error } = useContext(TodoContext);
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
