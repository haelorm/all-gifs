import { useState } from 'react';
import { GridGifs, AddCategory } from './components/';

export const AllGifs = () => {
    const [categories, setCategories] = useState(['Trunks']);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    return (
        <>
            <h1>AllGifs</h1>
            <AddCategory newAddCategory={onAddCategory} />

            {
                categories.map(category => {
                    return <GridGifs key={category} category={category} />
                })
            }

        </>
    )
}
