
import React, { useState } from 'react'
 {/*This is the query for the searchbar*/}
const Search = ({ getQuery }) => {            
 const [text, setText] = useState('')
 {/*When it changes it searches in the api*/}
   const onChange = (q) => {
       setText(q)
       getQuery(q)

   }
    return (
        <section className='search'>
            <form>
                <input 
                type='text'
                className='form-control'
                 {/*This shows the search bar text when its empty*/}
                placeholder='Search Characters'
                value={text}
                onChange={(e) => onChange(e.target.value)}
                autoFocus
                />
            </form>

        </section>
    )
}

export default Search
