import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef=React.createRef()
    }
    
    fousInput(){
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
               <h1>Class Input Focus</h1>
               <input type='text' ref={this.inputRef} />
            </div>
        )
    }
}

export default Input
