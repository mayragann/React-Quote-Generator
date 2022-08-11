import React from 'react'

import CharacterBiosinfo from './CharacterBiosinfo';

const CharacterBios = ({characterData}) => {
  return (
    <div>

        {characterData.map((data,index) =>{
            return (
            <>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <CharacterBiosinfo key={index} {...data}/>
            </div>
            </>
            );
          })}

    </div>
  )
}

export default CharacterBios