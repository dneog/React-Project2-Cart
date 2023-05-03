
import { useState } from 'react';
import AddProduct from './AddProduct';
import './App.css';
import ShowProduct from './ShowProduct';
import Header from './Header';

function App() {
  const [tasks, setTasks]= useState([])
  return (
    <div className="App">
    <Header />
     <AddProduct tasks={tasks} setTasks={setTasks}/>
     <ShowProduct tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
