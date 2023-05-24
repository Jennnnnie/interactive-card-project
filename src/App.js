import './App.css';
import React, { useState } from 'react';
import { Cards, Form } from './components';

function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [cvc, setCvc] = useState('');

  return (
    <>
      <div className='App'>
        <Cards
          name={name}
          number={number}
          // date={date} cvc={cvc}
        />
        <Form name={name} setName={setName} number={number} setNumber={setNumber} />
      </div>
    </>
  );
}

export default App;
