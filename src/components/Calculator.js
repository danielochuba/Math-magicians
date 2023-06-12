import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const text = e.target.innerText;
    setState((prevState) => calculate(prevState, text));
  };

  const displayValue = state.next
    ? `${state.total || ''} ${state.operation || ''} ${state.next}`
    : state.total || '0';

  return (
    <>
      <div className="nav">
        <p className="display-board">{displayValue}</p>
      </div>
      <div className="buttons">
        <button type="button" onClick={handleClick} className="btn  function">AC</button>
        <button type="button" onClick={handleClick} className="btn  function">+/-</button>
        <button type="button" onClick={handleClick} className="btn  function">%</button>
        <button type="button" onClick={handleClick} className="btn operator">+</button>
        <button type="button" onClick={handleClick} className="btn number">7</button>
        <button type="button" onClick={handleClick} className="btn number">8</button>
        <button type="button" onClick={handleClick} className="btn number">9</button>
        <button type="button" onClick={handleClick} className="btn operator">-</button>
        <button type="button" onClick={handleClick} className="btn number">4</button>
        <button type="button" onClick={handleClick} className="btn number">5</button>
        <button type="button" onClick={handleClick} className="btn number">6</button>
        <button type="button" onClick={handleClick} className="btn operator">*</button>
        <button type="button" onClick={handleClick} className="btn number">1</button>
        <button type="button" onClick={handleClick} className="btn number">2</button>
        <button type="button" onClick={handleClick} className="btn number">3</button>
        <button type="button" onClick={handleClick} className="btn operator">/</button>
        <button type="button" onClick={handleClick} className="btn number zero">0</button>
        <button type="button" onClick={handleClick} className="btn number dot">.</button>
        <button type="button" onClick={handleClick} className="btn operator equal">=</button>
      </div>
    </>
  );
}

export default Calculator;
