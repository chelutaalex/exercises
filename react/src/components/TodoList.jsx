import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { fetchTodos, toggleComplete } from "../slices/todosSlice";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.items);
    const loading = useSelector((state) => state.todos.loading);
    const error = useSelector((state) => state.todos.error);

    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('search') || "";

    const searchInputRef = useRef(null);

    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const filteredTodos = todos.filter(todo => 
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchParams(value ? { search: value } : {});
    };

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
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
                        <button onClick={() => handleToggleComplete(todo.id)}>
                            {todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TodoList;