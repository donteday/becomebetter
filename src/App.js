import './App.css';
import Header from './components/Header/Header';

function App() {
const thisMounthSpentAmount = 12500;

  return (
    <div className="App">
      <p className='emoji'>🎉🙂</p>
      <Header spentAmount={thisMounthSpentAmount}/>
    </div>
  );
}

export default App;
