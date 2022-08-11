import React from 'react'
import "./Quote.css"

const Quote = ({data}) => { // const quoteEls = data.map((quote) => <li class="quote">{quote.name}</li>);
    return (
        <div className='container card-information'>
            {
            data.map((quote, index) => 
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
            <div className='card-quote'>
                <div className='title'> {
                quote.name
            } </div>
            <p> {
                quote.quote
            } </p>
            </div>
            </div>
            )
        } </div>
    )
}

export default Quote;
