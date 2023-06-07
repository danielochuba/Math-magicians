import './App.css';
import {
  NavDisplay, LeftSection, Operators,
} from './components/components';

function App() {
  return (
    <div className="calculator-container">
      <NavDisplay />
      <div className="body">
        <LeftSection />
        <Operators />
      </div>

    </div>
  );
}

export default App;
