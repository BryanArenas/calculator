import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import CalculatorKey from '././CalculatorKey'

const CalcContainer = styled.div`
    width: 20.1rem;
    height: 30rem;
    background-color: #1C1C1C;
    display: grid;
    margin: 5px 5px 5px 5px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border: solid;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const CalculatorInput = styled.div`
    text-align: right;
    padding-left: 10%;
    font-family: "Arial", Helvetica, sans-serif;
    margin: 10px 10px 10px 0px;
    font-size: xxx-large;
`

const Result = styled.div`
    min-height: 3rem;
    color: white;

`

const CalculatorKeypad = styled.div`
    width: 20.1rem;
    background-color: #D4D4D2;
    display: grid;
    grid-template-columns: repeat(4, 5rem);
    grid-template-rows: repeat(5, 5rem);
    grid-template-areas: "keys-function keys-function keys-function keys-operators" "keys-numbers keys-numbers keys-numbers keys-operators" "keys-numbers keys-numbers keys-numbers keys-operators" "keys-numbers keys-numbers keys-numbers keys-operators" "keys-numbers keys-numbers keys-numbers keys-operators";

`

const KeysFunction = styled.div`
    grid-area: keys-function;
    display: grid;
    grid-template-columns: repeat(3, 5rem);
    direction: rtl;
    margin: 1px;

`

const KeysOperators = styled.div`
    grid-area: keys-operators;
    display: grid;
    grid-template-columns: repeat(1, 5rem);
    direction: rtl;
    margin: 1px;
    
    .orange {
        background-color: #ff9500;
        color: white;
        border-color: black;
       
    }

`

const KeysNumbers = styled.div`
    grid-area: keys-numbers;
    direction: rtl;
    display: grid;
    grid-template-columns: repeat(3, 5rem);
    margin: 1px;

    .keyZero {
        width: 8.9rem;
        text-align: left;
        padding-left: 15%;
    }

`

const KeyDot = styled.div`

`

function Calculator() {
    const [prevValue, setPrevValue] = useState(null);
    const [nextValue, setNextValue] = useState("0");
    const [op, setOp] = useState(null);
  
    useEffect(() => {}, [op, nextValue, prevValue]);
  
    const CalculatorOperations = {
      "/": (firstValue, secondValue) => firstValue / secondValue,
      "*": (firstValue, secondValue) => firstValue * secondValue,
      "+": (firstValue, secondValue) => firstValue + secondValue,
      "-": (firstValue, secondValue) => firstValue - secondValue,
      "=": (firstValue, secondValue) => secondValue,
    };
  
    const performOperation = () => {
      let temp = CalculatorOperations[op](
        parseFloat(prevValue),
        parseFloat(nextValue)
      );
      setOp(null);
      setNextValue(String(temp));
      setPrevValue(null);
    };
  
    const handleNum = (number) => {
      setNextValue(nextValue === "0" ? String(number) : nextValue + number);
    };
  
    const insertDot = () => {
      if (!/\./.test(nextValue)) {
        setNextValue(nextValue + ".");
      }
    };
    const percentage = () => {
      setNextValue(parseFloat(nextValue) / 100);
      if (prevValue && nextValue === "") {
        setPrevValue(parseFloat(prevValue) / 100);
      }
    };
    const changeSign = () => {
      setNextValue(parseFloat(nextValue) * -1);
    };
    const clearData = () => {
      setNextValue("0");
      setPrevValue(0);
    };
  
    const handleOperation = (value) => {
      if (Number.isInteger(value)) {
        handleNum(parseInt(value, 10));
      } else if (value in CalculatorOperations) {
        if (op === null) {
          setOp(value);
          setPrevValue(nextValue);
          setNextValue("");
        }
        if (op) {
          setOp(value);
        }
        if (prevValue && op && nextValue) {
          performOperation();
        }
      } else if (value === "c") {
        clearData();
      } else if (value === "\xB1") {
        changeSign();
      } else if (value === ".") {
        insertDot();
      } else if (value === "%") {
        percentage();
      }
    };
  
    return (
        <CalcContainer>
            <CalculatorInput>
                <Result>{nextValue} </Result>
            </CalculatorInput>
            <CalculatorKeypad>
                <KeysFunction>
                    <CalculatorKey keyValue={"C"} onClick={handleOperation} />
                    <CalculatorKey keyValue={"\xB1"} onClick={handleOperation} />
                    <CalculatorKey keyValue={"%"} onClick={handleOperation} />
                </KeysFunction>
                <KeysOperators>
                    <CalculatorKey className="orange" keyValue={"+"} onClick={handleOperation} />
                    <CalculatorKey className="orange" keyValue={"-"} onClick={handleOperation} />
                    <CalculatorKey className="orange" keyValue={"*"} onClick={handleOperation} />
                    <CalculatorKey className="orange" keyValue={"/"} onClick={handleOperation} />
                    <CalculatorKey className="orange" keyValue={"="} onClick={handleOperation} />
                </KeysOperators>
                <KeysNumbers>
                    <CalculatorKey keyValue={9} onClick={handleOperation} />
                    <CalculatorKey keyValue={8} onClick={handleOperation} />
                    <CalculatorKey keyValue={7} onClick={handleOperation} />
                    <CalculatorKey keyValue={6} onClick={handleOperation} />
                    <CalculatorKey keyValue={5} onClick={handleOperation} />
                    <CalculatorKey keyValue={4} onClick={handleOperation} />
                    <CalculatorKey keyValue={3} onClick={handleOperation} />
                    <CalculatorKey keyValue={2} onClick={handleOperation} />
                    <CalculatorKey keyValue={1} onClick={handleOperation} />
                    <CalculatorKey keyValue={"."} onClick={handleOperation} />
                    <CalculatorKey className="keyZero" keyValue={0} onClick={handleOperation} />
                </KeysNumbers>
            </CalculatorKeypad>
        </CalcContainer>
    );
}

export default Calculator