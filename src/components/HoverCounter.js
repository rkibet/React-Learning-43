import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hoverCount:0
        }
    }
    mouseOver=()=>{
     this.setState(prev=>{
         return{hoverCount:prev.hoverCount+1}
     })
    }
    render() {
        const {hoverCount}=this.state
        return (
            <div>
                <h1 onMouseOver={this.mouseOver}>Hovered {hoverCount} Times</h1>
            </div>
        )
    }
}

export default HoverCounter
