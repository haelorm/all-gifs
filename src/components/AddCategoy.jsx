import { useState } from 'react';

export const AddCategoy = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onChangeInput = ({ target }) => {
        setInputValue(target.value);
    }
    let input = inputValue.trim().toLowerCase();
    const onSubmit = (e) => {
        e.preventDefault();
        if (input.length <= 1) return;
        setInputValue('');
        onNewCategory(input);
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onChangeInput} />
        </form>
    )
}
