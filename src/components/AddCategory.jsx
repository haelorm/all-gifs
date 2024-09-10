import { useState } from 'react';

export const AddCategory = ({ newAddCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const onChangeValue = ({ target }) => {
    setInputValue(target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    newAddCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onChangeValue}
      />
    </form>
  )
}
