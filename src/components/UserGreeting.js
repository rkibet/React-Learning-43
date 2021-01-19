import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome Ronald
        //         </div>
        //     )
        // }
        // else{
        //     return (
        //         <div>
        //             Welcome Quest
        //         </div>
        //     )
        // }
        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Ronald</div>
        // }
        // else{
        //     message=<div>Welcome Quest</div>
        // }
        // return(
        //     <div>{message}</div>
        // )
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Ronald</div>
        //     :
        //     <div>Welcome Quest</div>
        // )
        return( this.state.isLoggedIn&&<div>Welcome Ronald</div>)

    }
}

export default UserGreeting
