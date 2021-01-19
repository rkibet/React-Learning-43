import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class ButtonClickCount extends Component {
    
    render() {
        const {count,incrementCount}=this.props
        return (
            <div>
                <h1>Button Clicks Count</h1>
                <h2>Clicked - {count} -Times </h2>
                <p>{this.props.name}</p>
                <button onClick={incrementCount}>Click To Count</button>
            </div>
        )
    }
}

export default UpdatedComponent(ButtonClickCount)
