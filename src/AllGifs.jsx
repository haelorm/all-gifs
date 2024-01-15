import { useState } from 'react';
import { AddCategoy } from './components';
import { GifGrid } from './components/GifGrid';

export const AllGifs = () => {
    const [categories, setCategories] = useState(['sonic']);
    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories]);
    }
    return (
        <>
            <h1>All Gifs</h1>
            <AddCategoy onNewCategory={onAddCategory} />

            {
                categories.map(category => {
                    return <GifGrid key={category} category={category} />
                })
            }

        </>
    )
}
