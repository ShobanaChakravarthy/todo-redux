import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import { selectTodos } from './features/todoSlice';

function App() {
  const todoList = useSelector(selectTodos)
  return (
    <div className="app">
      <div className="app__container">
        <div className="app_todoContainer">
          {
            todoList.map(item=>(
              <TodoItem 
                name={item.item}
                done={item.done}
                id={item.id}
              />
            ))
          }
        </div>
        <Input/>
      </div>
    </div>
  );
}

export default App;
