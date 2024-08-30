import React from 'react';
import { Provider } from 'react-redux'; 
import store from './store'; 
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import TodoDetails from './pages/TodoDetails'; 

function App() {
  return (
    <Provider store={store}>  
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todos/:id" element={<TodoDetails />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;