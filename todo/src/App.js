import Login from './components/Login';
import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound';
import InvalidAccess from './components/InvalidAccess';



function App() {
  const [loginState, setLoginState] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>ToDo App</h1>
      </header>


      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/todolist' element={<TodoList />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/invalidaccess' element={<InvalidAccess/>}/>
      </Routes>

      {/* 
      // {!loginState && <Login updateState={setLoginState}/>}
      // {loginState && <TodoList/>} */}
    </div>
  );
}

export default App;
