import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs( category );

    console.log(loading);

    /* const[images, setImages] = useState([]);

    useEffect( () => {
        getGifs( category )
            .then(imgs => setImages ( imgs ) );
    }, [ category ]) */

    return (
        <> {/* fragment */}
            <h3>{ category }</h3>

        {/* condición */}
            { loading && <p className="animate__animated animate__swing animate__slower">Loading...</p> }
            <div className="card-grid">
                {
                    data.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }   
            </div>
        </>
        
    )
}
