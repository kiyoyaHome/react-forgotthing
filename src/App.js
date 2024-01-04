import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Leftsidebar from './components/Leftsidebar';
import Rightsidebar from './components/Rightsidebar';
import Mallbox from './components/Mallbox';

function App() {
  const [state1, setstate1] = useState(false)
  const [state2, setstate2] = useState(false)
  const [state3, setstate3] = useState(false)
  const changeState1 = () => {
    setstate1(!state1);
  }
  const changeState2 = () => {
    if(state3 === true){
      setstate3(!state3)
    }else{
      setstate2(!state2)
    }
  }
  const changeState3 = () => {
    if(state2 === true){
      setstate2(!state2)
    }else{
      setstate3(!state3)
    }
  }


  return (
    <div>
      <div>
        <Header onClick1={changeState1} onClick2={changeState2} onClick3={changeState3}/>
        {state1 && <Leftsidebar />}
        {state2 && <Mallbox />}
        {state3 && <Rightsidebar />}
      </div>
    </div>
  );
}
export default App;
