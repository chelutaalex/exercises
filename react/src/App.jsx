import HelloWorld from "./components/HelloWorld"
import Counter from "./components/Counter.jsx"
import TextInput from "./components/TextInput.jsx"
import LoginForm from "./components/LoginForm.jsx"
import UncontrolledInput from "./components/UncontrolledInput.jsx"
import ItemList from "./components/ItemList.jsx"
import Card from "./Card.jsx"
import TodoList from "./components/TodoList.jsx"
import { TodoProvider } from './context/TodoContext.jsx';
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import About from "./pages/About.jsx"
import Navbar from './components/Navbar.jsx'
import Layout from "./components/Layout.jsx"
import TodoDetail from "./pages/TodoDetail.jsx"

function App() {

  return (
    <TodoProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="todos/:id" element={<TodoDetail />} />
        </Route>
      </Routes>
    </TodoProvider>
  );
}

export default App
