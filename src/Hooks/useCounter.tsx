import { useState } from 'react';

export const useCounter = (initialValue: number = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter((c) => c + 1);
  const decrement = () => setCounter((c) => (c > 1 ? c - 1 : c));

  return { counter, increment, decrement };
};
