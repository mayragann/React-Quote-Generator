import React from 'react'
import {Card, CardTitle, CardText} from 'reactstrap';

const Quote = ({data}) => { // const quoteEls = data.map((quote) => <li class="quote">{quote.name}</li>);
    return (
        <div> {
            data.map((quote) => <Card body>
                <CardTitle tag="h5">
                    {
                    quote.name
                } </CardTitle>
                      <CardText>
        {quote.quote}
      </CardText>
            </Card>)
        } </div>
    )
}

export default Quote;
