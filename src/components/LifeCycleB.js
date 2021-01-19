import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             names:"Ronald"
        }
        console.log('React lifecycle B in the Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('React lifecycle B in the getDerivedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('React lifecycle B in the Did Mount')
    }
    componentDidMount(){
        console.log('React lifecycle B in the Did Mount')
    }
    
    shouldComponentUpdate(){
        console.log('React lifecycle B in the  should Component Update')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,preveState){
        console.log('React lifecycle B in the getSnapshotBeforeUpdate')
        return null;
    }
    componentDidUpdate(){
        console.log('React lifecycle B componentDidUpdate')
    }
    render() {
        console.log('React lifecycle B in the Render')
        return (
            <div>
                <h1>React LifeCycle B</h1>
                
            </div>
        )
    }
}

export default LifeCycleB
