import { useState } from 'react';

export default function Player({ name, symbol, isActive, onChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputName, setInputName] = useState(name);

  function handleClick() {
    setIsEditing(prevEdit => !prevEdit);
    if (isEditing) onChange(symbol, inputName);
  }

  function handleChangeName(e) {
    setInputName(e.target.value);
  }

  return (
    <li className={isActive && 'active'}>
      <span className='player'>
        {isEditing ? (
          <input type='text' required value={inputName} onChange={handleChangeName} />
        ) : (
          <span className='player-name'>{inputName}</span>
        )}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
