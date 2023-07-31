import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decreament,increament } from './component/couterSlice';
function App() {
  const state1 = useSelector((state)=>state.counter)
  const dispacth= useDispatch()
  return (
    <div className="App">
   <button onClick={()=>dispacth(increament())}>Increament</button>
   <div>{state1}</div>
      <button onClick={()=>dispacth(decreament())}>Decreament</button>
    </div>
  );
}

export default App;
