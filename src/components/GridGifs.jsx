import { GifItems } from './GifItems';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GridGifs = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando...</h2>
            }
            <div className='card-grid'>
                {
                    images.map(img => {
                        return <GifItems key={img.id} {...img} />
                    })
                }
            </div>
        </>

    )
}
