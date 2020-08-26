import React from 'react'
import styled from '@emotion/styled'

const Button = styled.div`
  background-color: #D4D4D2;
  width: 4.9rem;
  height: 4.9rem;
  margin: .5px;
  text-align: center;
  justify-content: center;
  font-size: 150%;
  font-family: "Times New Roman", Times, serif;
  background: rgb(226,226,226);
  background: radial-gradient(circle, rgba(226,226,226,1) 0%, rgba(212,212,210,1) 81%);
  `

function CalculatorKey(props) {
  return (
    <Button className={`${props.className}`}
      onClick={() => props.onClick(props.keyValue)}
    >
      {props.keyValue}{" "}
    </Button>
  );
}

export default CalculatorKey;