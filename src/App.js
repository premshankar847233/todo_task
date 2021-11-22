// import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import {arr} from './Components/Todo'
function App() {

  console.log(arr);
  return (
    <div className="App">
      <Todo/>
    </div>
  );
}

export default App;
