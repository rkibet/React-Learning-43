import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             names:"Ronald"
        }
        console.log('React lifecycle A in the Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('React lifecycle A in the getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('React lifecycle A in the Did Mount')
    }
    
    shouldComponentUpdate(){
        console.log('React lifecycle A in the  should Component Update')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,preveState){
        console.log('React lifecycle A in the getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('React lifecycle A componentDidUpdate')
    }
    changeState=()=>{
        this.setState({
            name:'Ronald Kibet'
        })

    }
    render() {
        console.log('React lifecycle A in the Render')
        return (
            <div>
                <h1>React LifeCycle A</h1>
                <button onClick={this.changeState}>Click</button>
                <LifeCycleB/>
                
            </div>
        )
    }
}

export default LifeCycleA
