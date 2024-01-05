import { useState } from 'react';
import Header from './Header';
import Leftsidebar from './Leftsidebar';
import Rightsidebar from './Rightsidebar';
import Mallbox from './Mallbox';

function HomeScreen() {
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
export default HomeScreen;
