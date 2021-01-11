import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['novelas', 'suspenso', 'aventuras'];
    const [categories, setCategories] = useState(['Literatura']);

    // const handleAdd = () =>{
    //     //HunterXHunter
    //     // categories.push('HunterXHunter');    no es una buena practica
    //     // console.log(categories);
    //     setCategories(literario => [...literario, 'HunterXHunter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* comunicación entre componentes */}
            <AddCategory setCategories={ setCategories } />
            <hr />

            {/* <button onClick={ handleAdd }> Agregar </button> */}

            <ol>
                {
                     categories.map( category => (
                         <GifGrid
                             key={ category }
                             category={ category } 
                         />
                     ))
                    // categories.map(category => {
                    //     return <li key={ category }> {category} </li>
                    // })
                    // categories.map( category => 
                        
                    //     <li key={ category }> { category } </li>
                    // )
                }
            </ol>
        </>
    )
}
