import React, {useState, useEffect } from 'react'
import Header from './components/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css'
import axios from 'axios'

const App = () => {
  const [items, setItems] = useState([])                          //fill array with the data from the api
  const [isLoading, setIsLoading] = useState(true)              //checks if the state is loading
  const [query, setQuery] = useState('')                        //brings up the query from the search

  useEffect(() => {                                            //fetches the items from the api
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`               //breaking bad api
      )

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App