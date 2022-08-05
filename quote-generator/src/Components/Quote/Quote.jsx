import React from 'react'

const Quote = ({data}) => {
    return (
        <div>

            <blockquote>
            {data[0].quote}
                <p>-{data[0].name}</p>
            </blockquote>
        </div>
    )
}

export default Quote;
