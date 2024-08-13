import './App.css';
import AddSpent from './components/AddSpent/AddSpent';
import Header from './components/Header/Header';
// import { useState } from 'react';


function App() {
  const thisMounthSpentAmount = 0;
  // const [comment, setComment] = useState('');

  return (
    <div className="App">
      <Header spentAmount={thisMounthSpentAmount} />
      <AddSpent></AddSpent>
      <button className='btn btn_add'>+</button>
    </div>
  );
}

export default App;
