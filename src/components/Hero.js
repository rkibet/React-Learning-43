import React from 'react'

function Hero({heroMan}) {
    if(heroMan==='Joker'){
        throw new Error('not an hero')
    }
    return (
        <div>
           <h1> {heroMan}</h1>
        </div>
    )
}

export default Hero
