import HelloWorld from "./components/HelloWorld"
import Counter from "./components/Counter.jsx"
import TextInput from "./components/TextInput.jsx"
import LoginForm from "./components/LoginForm.jsx"
import UncontrolledInput from "./components/UncontrolledInput.jsx"
import ItemList from "./components/ItemList.jsx"

function App() {

  const cars = ["audi" , "fiat" , "seat" , "lancia"]

  return (
    <>
     <ItemList macchine = {cars}/>
    </>
  )
}

export default App
