import React from 'react';

const NavDisplay = () => (
  <div className="nav">
    <p className="display-board">0</p>
  </div>
);

function Numbers() {
  return (
    <div className="numbers">
      <button type="button" className="number">7</button>
      <button type="button" className="number">8</button>
      <button type="button" className="number">9</button>
      <button type="button" className="number">4</button>
      <button type="button" className="number">5</button>
      <button type="button" className="number">6</button>
      <button type="button" className="number">1</button>
      <button type="button" className="number">2</button>
      <button type="button" className="number">3</button>
      <button type="button" className="number zero">0</button>
      <button type="button" className="number dot">.</button>
    </div>
  );
}

function Operators() {
  return (
    <div className="operators">
      <button type="button" className="operator">+</button>
      <button type="button" className="operator">-</button>
      <button type="button" className="operator">*</button>
      <button type="button" className="operator">/</button>
      <button type="button" className="operator">=</button>
    </div>
  );
}

const Functions = () => (
  <div className="functions">
    <button type="button" className=" function">AC</button>
    <button type="button" className=" function">+/-</button>
    <button type="button" className=" function">%</button>
  </div>
);

function LeftSection() {
  return (
    <div className="left-section">
      <Functions />
      <Numbers />
    </div>
  );
}

export {
  NavDisplay, Operators, LeftSection,
};
