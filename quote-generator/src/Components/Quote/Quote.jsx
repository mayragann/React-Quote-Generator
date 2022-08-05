import React from 'react'

const Quote = ({data}) => {
    return (
        <div>

            <blockquote>
            {data.quote}
                <p>-{data.name}</p>
            </blockquote>
        </div>
    )
}

export default Quote;
