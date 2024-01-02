import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Leftsidebar from './components/Leftsidebar';

function App() {
  const [state1, setstate1] = useState(false)
  const changeState1 = () => (
    setstate1(!state1)
  )

  return (
    <div className="App">
      <Header onClick={changeState1}/>
      {state1 && <Leftsidebar />}
    </div>
  );
}
export default App;
