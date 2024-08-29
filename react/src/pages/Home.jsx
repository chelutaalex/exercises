import React, { useContext, useState, useCallback, useMemo } from 'react';
import { TodoContext } from '../context/TodoContext';
import useFilteredTodos from '../hooks/useFilteredTodos';
import { Link } from 'react-router-dom';

const Home = () => {
  const { todos, loading, error } = useContext(TodoContext);
  const [searchTerm, setSearchTerm] = useState("");
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
        onChange={(e) => setSearchTerm(e.target.value)}
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

export default Home;