import HelloWorld from "./components/HelloWorld"
import Counter from "./components/Counter.jsx"
import TextInput from "./components/TextInput.jsx"
import LoginForm from "./components/LoginForm.jsx"
import UncontrolledInput from "./components/UncontrolledInput.jsx"
import ItemList from "./components/ItemList.jsx"
import Card from "./Card.jsx"
import TodoList from "./components/TodoList.jsx"
import { TodoProvider } from './context/TodoContext.jsx';

function App() {

  return (
      <TodoProvider>
          <TodoList />
      </TodoProvider>
        );
}

export default App
