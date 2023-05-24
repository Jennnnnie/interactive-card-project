import React, { useState } from 'react';
import { checkIcon } from './imports';
import './form.css';

const Form = ({ name, setName, number, setNumber }) => {
  const [errorNumber, setErrorNumber] = useState(false);

  const handleCardNumber = (e) => {
    if (e.target.value.match(/[^$,.\d]/)) {
      setErrorNumber(true);
    } else {
      setErrorNumber(false);
    }
    setNumber(e.target.value);
  };

  return (
    <>
      <div className='interactive-cards_form'>
        <form>
          <label className='form_cardholder-name'>
            Cardholder Name
            <input
              type='text'
              placeholder='e.g. Jane Appleseed'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label className='form_card-number'>
            Card number
            <input
              type='text'
              placeholder='e.g. 1234 5678 9123 000'
              value={number}
              onChange={handleCardNumber}
              className={errorNumber ? 'error-field' : ''}
            />
            <div>{errorNumber && 'Wrong format, numbers only'}</div>
          </label>
          <label className='form_expiry-date'>
            Exp. date (mm/yy)
            <input type='text' placeholder='MM' className='form_expiry-month' />
            <input type='text' placeholder='YY' className='form_expiry-year' />
          </label>
          <label className='form_card-cvc'>
            CVC
            <input type='text' placeholder='e.g. 123' />
          </label>
          <button
            className='form_button'
            //  disabled={}
          >
            Confirm
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
