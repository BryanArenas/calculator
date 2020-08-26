import React from 'react'
import styled from '@emotion/styled'

const Button = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  margin: 0.4rem;
  text-align: center;
  font-size: 150%;
  border-radius: 0.8rem;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem grey;
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