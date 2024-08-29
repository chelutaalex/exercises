import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';

const TodoDetail = () => {
  const { id } = useParams(); 
  const { todos } = useContext(TodoContext); 
  const [todo, setTodo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundTodo = todos.find(todo => todo.id === parseInt(id, 10));
    setTodo(foundTodo);
  }, [id, todos]);

  if (!todo) {
    return <div>To-do non trovato</div>;
  }

  return (
    <div>
      <h1>Dettagli del To-Do</h1>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p><strong>Status:</strong> {todo.completed ? 'Completato' : 'Incompleto'}</p>
      <p><strong>User ID:</strong> {todo.userId}</p>
      <button onClick={() => navigate(-1)}>Indietro</button>
    </div>
  );
};

export default TodoDetail;