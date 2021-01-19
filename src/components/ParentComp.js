import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureCom from './PureCom'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Ronald'
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Ronald'
            })
            
        }, 2000);
    }
    
    render() {
        console.log('------Parent Component Render------')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>
                
                {/* <RegComp name={this.state.name}/>
                <PureCom name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
