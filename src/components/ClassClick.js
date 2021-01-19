import React, { Component } from 'react'

class ClassClick extends Component {
    clickButton(){
        console.log('Button Clicked Now')
    }
    render() {

        return (
            <div>
                <button onClick={this.clickButton}>Click Button</button>
            </div>
        )
    }
}

export default ClassClick
