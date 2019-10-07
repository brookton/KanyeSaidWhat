import React from 'react';

// it would be so fun to render a modal on click
// modal styled like a fake tweet auto generating a number
// for likes and for retweets

const Card = (props) => {
    return (
        <div className='quote-container'>
            <p className='quote'>{props.quote ? `"${props.quote}"` : null }</p>
            <p className='kanye'>{props.quote ? "-Kanye West" : null }</p>
        </div>
    )
}

export default Card
