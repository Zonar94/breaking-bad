import React from 'react'
import CharacterItem from './CharacterItem'


const CharacterGrid = ({ items, isLoading }) => {                //checks if the items are being loaded in
    return isLoading ? (                                           
    <h1>Loading...</h1> 
   ) : ( 
   <section className="cards" >                            
        {items.map((item) => (
            <CharacterItem key={item.char_id} item={item}></CharacterItem> //loads the character items
        ))}
    </section>     
   ) 
}

export default CharacterGrid
