import useFetch from "../hooks/useFetch"

const TodoList = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const { data, loading, error } = useFetch(url);

    if (loading) {
        return <div>Loading...</div> 
    } 

    if (error) {
        return <div>{error.message}</div>
    }

    return (
        <>
            <ul>
                {
                    data.map(todo => (
                        <li key={todo.id}>
                                id:{todo.id}<br />
                                title:{todo.title}<br /> 
                                status:{todo.completed ? '(Completato)' : '(Incompleto)'}<br />
                                user id: {todo.userId}<br />
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default TodoList;