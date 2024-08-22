import React, { useState, useCallback, useMemo, useRef, useEffect, useContext } from "react";
import { TodoContext } from "../context/TodoContext.jsx";
import useFilteredTodos from "../hooks/useFilteredTodos.jsx";

const TodoList = () => {
    const { todos, loading, error } = useContext(TodoContext);  // Accesso ai dati tramite il contesto
    const [searchTerm, setSearchTerm] = useState("");

    // Riferimento per l'input di ricerca
    const searchInputRef = useRef(null);

    // Imposta il focus sull'input di ricerca quando il componente viene montato
    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, []);

    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    // Usa l'hook personalizzato per filtrare i to-do
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
                ref={searchInputRef}  // Associa il riferimento all'input
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
