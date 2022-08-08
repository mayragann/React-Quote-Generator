import React from 'react'

const CharacterBios = ({characterData}) => {
  return (
    <div>
   <table >
        <thead>

        </thead>
        <tbody>
        {characterData.map((data) =>{
            return (
            <>
            <tr className="top">
                <td className="name">{data.name}</td>
            </tr>
            <tr >  
                <td className="post">{data.bio}</td>
            </tr>
            </>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CharacterBios