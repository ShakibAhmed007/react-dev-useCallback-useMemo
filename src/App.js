import React, { useState, useCallback } from 'react';
import './style.css';
import Title from './components/Title';
import ShowCount from './components/ShowCount';
import Button from './components/Button';

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1(prevState => prevState + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2(prevState => prevState + 5);
  }, []);

  const isEvenOrOdd = () => {
    let i = 0;
    while (i < 10000000000) {
      i = i + 1;
    }
    return count1 % 2 === 0;
  };

  return (
    <div>
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <Button handleClick={incrementByOne}>Increment By One</Button>
      <hr />
      <span> {isEvenOrOdd() ? 'Even' : 'Odd'}</span>
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={incrementByFive}>Increment By Five</Button>
    </div>
  );
}
