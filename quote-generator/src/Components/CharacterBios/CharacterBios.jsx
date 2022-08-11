import React from 'react'
import "./CharacterBios.css"

import CharacterBiosinfo from './CharacterBiosinfo';

const CharacterBios = ({characterData}) => {
  return (
    <div className='container character' >

        {characterData.map((data,index) =>{
            return (
            <>
            <div  >
                <CharacterBiosinfo key={index} {...data}/>
            </div>
            </>
            );
          })}

    </div>
  )
}

export default CharacterBios