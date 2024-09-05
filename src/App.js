import './App.css';
import Task from './Task';

function App() {
  let id = 0;
  return (
    <>
      <h1> Hello todo World</h1>
      <Task id={id++} />
      <Task id={id++} />
      <Task id={id++} />
    </>
  );
}

export default App;
