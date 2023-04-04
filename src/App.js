import './App.css';
import Navbar from './MyComponents/Navbar';
import Todos from './MyComponents/Todos';
import React, { useState , useEffect} from 'react';


function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  
  const onDelete = (todo) => {
    setTodo(todos.filter(e => {
      return e !== todo;
    }));
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  
  const onEdit = (sno, newTitle, newDesc) => {
    console.log(sno, newTitle, newDesc);
    if (newTitle || newDesc) {
      const updatedTodos = todos.map(todo => {
        if (todo.sno === sno) {
          return {
            ...todo,
            title: newTitle,
            desc: newDesc
          };
        }
        return todo;
      });
      setTodo(updatedTodos);
    }
  };
  const [todos, setTodo] = useState(initTodo);
 
  const addtodo = (title, desc) => {
    let newSno = 1;
    if (todos.length > 0) {
      newSno = todos[todos.length - 1].sno +1;
    }
    const mytodo = {
      sno: newSno,
      title: title,
      desc: desc
    };
    setTodo([...todos, mytodo]);
    console.log(mytodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  
  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Navbar title="Todo" />
      <Todos addtodo={addtodo} todo={todos} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

export default App;
