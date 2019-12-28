import React from 'react';
import { useState } from 'react';

const Thing = () => {
  const [foo, setFoo] = useState('foo');

  return (
    <div>{foo}</div>
  );
}

export default Thing;