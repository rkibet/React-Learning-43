import React, { Component } from 'react'

class ClickTwoCounter extends Component {
   
    render() {
        const {count,incrementCount}=this.props
        return (
            <div>
            <h1>Click Two Counter</h1>
            <h1>{count}</h1>

            <button onClick={incrementCount}>Click To count</button>
                
            </div>
        )
    }
}

export default ClickTwoCounter
