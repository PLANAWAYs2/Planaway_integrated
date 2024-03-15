import { useState } from 'react';
import { onChangeButton } from '../util/Regex';
import './Input.css';

const Input = ({ text, btnText, type, setStateMsg, btnState }) => {
  const [state, setState] = useState('');

  return (
    <>
      <div className={['IInputTextForm', `${btnState}`].join(' ')}>
        <div className={`${btnState}`}>
          <div className="IInputText"> {text} </div>
          <div className="IInputForm">
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              type={type}
            />
          </div>
        </div>
        <div className={['IButton', `${btnState}`].join('')}>
          <button onClick={() => onChangeButton(type, state, setStateMsg)}>
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
