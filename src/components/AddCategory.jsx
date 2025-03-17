import { useState } from 'react';
// import Proptypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSUbmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim())

    setInputValue('');
  }

  return (
    <form onSubmit={onSUbmit}>
      <input type="text" placeholder="Buscar gifts" value={inputValue} onChange={onInputChange} />
    </form>

  )
}

// AddCategory.propTypes = {
//   newCategory: Proptypes..isRequired
// }
