import React, { createContext, useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch.jsx';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const { data, loading, error } = useFetch(url);

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if (data) {
            setTodos(data);
        }
    }, [data]);

    return (
        <TodoContext.Provider value={{ todos, setTodos, loading, error }}>
            {children}
        </TodoContext.Provider>
    );
};
