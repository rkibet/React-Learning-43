import React, { Component } from 'react'

class ClickCount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount=()=>{
        this.setState(prevCount=>{
            return {count:prevCount.count +1}
        })
    }

    render() {
        const{count}=this.state
        return (
            <div>
                <h1>Counter App</h1>
                <h2>Count: - {count}</h2>
                <button onClick={this.incrementCount}>Click To Increment</button>
            </div>
        )
    }
}

export default ClickCount
