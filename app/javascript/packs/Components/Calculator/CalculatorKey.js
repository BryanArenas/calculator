import React from 'react'
import styled from '@emotion/styled'

const Button = styled.div`
  text-align: center;
  font-size: 150%;
  height: 4.95rem;
  width: 4.95rem;
  font-family: "Times New Roman", Times, serif;
  background: rgb(226,226,226);
  background: radial-gradient(circle, rgba(226,226,226,1) 0%, rgba(212,212,210,1) 81%);
  opacity: 1;
  margin: .3px;
  transition: opacity .3s;
  line-height: 4.95rem;

  &:hover {
    opacity: 0.9;
  }
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