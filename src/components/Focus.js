import React, { Component } from 'react'
import Input from './Input'

class Focus extends Component {
    constructor(props) {
        super(props)
    
        this.componentRef=React.createRef()
    }
    
    onFocus=()=>{
        this.componentRef.current. fousInput()
    }
    
    render() {
        return (
            <div>
                <Input ref={this.componentRef}/>
                <button onClick={this.onFocus}>Click</button>
            </div>
        )
    }
}

export default Focus
