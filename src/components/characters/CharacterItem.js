import React from 'react'

const CharacterItem = ({ item }) => {   //structure for the cards 
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
               {/*Loads the actors name*/}
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
               {/*Loads their nickname*/}
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
               {/*Loads their Birthday*/}
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
               {/*Loads their status*/}
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem