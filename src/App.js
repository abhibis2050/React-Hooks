
import './App.css';
import Parent from './Parent';
import UseMemoHook from './components/useContext/UseMemoHook';
import ClearUp from './components/useEffect/Screensize';
import UseReducers from "./components/useReducer/incdec"
function App() {
  return (
    <div className="App">
      {/* <ClearUp/>   */}
      {/* <Parent/> */}
      {/* <UseReducers/> */}
      <UseMemoHook/>
    </div>
  );
}

export default App;
