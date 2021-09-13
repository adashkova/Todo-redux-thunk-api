import TodoItems from '../todoItems/TodoItems';
import Form from '../form/Form';
import './App.css';
import Filters from '../filters/Filters';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <Form />
        <TodoItems />
        <Filters />
      </div>
    </div>
  );
}

export default App;
