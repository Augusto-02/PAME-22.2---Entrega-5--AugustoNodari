
import './App.css';
import ToDoList from './Componnets/ToDoList';
import { GlobalStyle } from './Constants';


function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
