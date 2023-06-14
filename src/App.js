import './css/App.css';
import Calculator from './components/Calculator';
import Quotes from './components/quotes';

function App() {
  return (
    <div className="calculator-container">
      <div className="body">
        <Calculator />
        <Quotes />
      </div>

    </div>
  );
}

export default App;
