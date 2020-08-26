import React from 'react'
import styled from '@emotion/styled'

const Button = styled.div`
  background-color: #D4D4D2;
  width: 4.7rem;
  height: 4.7rem;
  margin: .5px;
  text-align: center;
  justify-content: center;
  font-size: 150%;
  border: solid;
  border-width: .5px;
  font-family: "Times New Roman", Times, serif;
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