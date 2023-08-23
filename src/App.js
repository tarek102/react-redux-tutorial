import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter)
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;
