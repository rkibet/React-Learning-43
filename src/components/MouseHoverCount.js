import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class MouseHoverCount extends Component {
    
    render() {
        const {count,incrementCount}=this.props
        return (
            <div>
                <h1>Mouce Hover Counter</h1>
                <h2 onMouseOver={incrementCount}>Counter - {count} </h2>

            </div>
        )
    }
}

export default UpdatedComponent(MouseHoverCount)
