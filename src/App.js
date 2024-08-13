import './App.css';
import AddSpent from './components/AddSpent/AddSpent';
import Header from './components/Header/Header';

function App() {
const thisMounthSpentAmount = 0;

  return (
    <div className="App">
      <Header spentAmount={thisMounthSpentAmount}/>
      <AddSpent></AddSpent>
      <button className='btn btn_add'>+</button>
    </div>
  );
}

export default App;
