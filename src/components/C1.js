import React,{useState} from 'react';
import './style.css';

function C1() {
  const [display, setDisplay] = useState("0");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error');
      }      
    } else if (value === "⌫") {
      setDisplay((prevDisplay) => {
        if (prevDisplay === 'Error' || prevDisplay.length === 1) {
          return '0';
        } else {
          return prevDisplay.slice(0, -1);
        }
      });
    } else {
      setDisplay((prevDisplay) => (prevDisplay === "0" ? value : prevDisplay + value));
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="buttons1">
          <div className="row">
            <button className="button-set1" onClick={() => handleButtonClick("7")}>7</button>
            <button className="button-set1" onClick={() => handleButtonClick("8")}>8</button>
            <button className="button-set1" onClick={() => handleButtonClick("9")}>9</button>
          </div>
          <div className="row">
            <button className="button-set1" onClick={() => handleButtonClick("4")}>4</button>
            <button className="button-set1" onClick={() => handleButtonClick("5")}>5</button>
            <button className="button-set1" onClick={() => handleButtonClick("6")}>6</button>
          </div>
          <div className="row">
            <button className="button-set1" onClick={() => handleButtonClick("1")}>1</button>
            <button className="button-set1" onClick={() => handleButtonClick("2")}>2</button>
            <button className="button-set1" onClick={() => handleButtonClick("3")}>3</button>
          </div>
          <div className="row">
            <button className="button-set1" style={{borderBottomLeftRadius:"20px"}} onClick={() => handleButtonClick("0")}>0</button>
            <button className="button-set1" onClick={() => handleButtonClick(".")}>.</button>
            <button className="button-set1" onClick={() => handleButtonClick("=")}>=</button>
          </div>
        </div>
        <div className="buttons2">
          <div className="row">
            <button className="button-set2" onClick={() => handleButtonClick("⌫")}>⌫</button>
          </div>
          <div className="row">
            <button className="button-set2" onClick={() => handleButtonClick("/")}>&#247;</button>
          </div>
          <div className="row">
            <button className="button-set2" onClick={() => handleButtonClick("*")}>×</button>
          </div>
          <div className="row">
            <button className="button-set2" onClick={() => handleButtonClick("-")}>-</button>
          </div>
          <div className="row">
            <button className="button-set2" style={{borderBottomRightRadius:"20px"}} onClick={() => handleButtonClick("+")}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default C1;