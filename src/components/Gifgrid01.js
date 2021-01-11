import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const[images, setImages] = useState([]);

    //UseEffect
    //const [count, setCount] = useState(0);

    useEffect( () => {
        getGifs( category )
            .then(imgs => setImages ( imgs ) );
    }, [ category ])

    //Esta función realiza la petición http, trae las imagenes, las procesa y puede retornarlas
     const getGifs = async() => {

        const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=2425JFDMselEjcNMMXIkDrRA7rd5wfnn`
        const resp = await fetch (url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title:img.title,
                url: img.images?.downsized_medium.url
            }
        })

        //console.log(gifs);
        setImages( gifs );
    } 

    //getGifs();

    return (
        <> {/* fragment */}
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }   

                {/* <h3> { count } </h3>
                <button onClick={ ()=> setCount( count + 1 )}></button> */}
                {/* <ol>
                    {
                        // images.map( img => (
                        //     <li key={ img.id }>{ img.title }</li>
                        // ))
                        //destructurar el objeto
                        images.map( ({ id, title }) =>(
                            <li key={ id }>{ title }</li>
                        ))
                    }
                </ol> */}
            </div>
        </>
        
    )
}
