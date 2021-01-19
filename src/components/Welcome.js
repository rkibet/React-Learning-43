import React,{Component} from 'react'

class Welcome extends Component{

    render(){
        const {name,otherName}=this.props
        return <h1>Hello Mr : {name} Computer Language : {otherName}</h1>
    }
}
export default Welcome