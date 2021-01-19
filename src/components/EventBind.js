import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello Over There'
        }
        this.buttonClick=this.buttonClick.bind(this)
    }
  
     
    // buttonClick(){
    //     this.setState({
    //         message:'GoodBye'
    //     })
    //     console.log(this)
    // }
  buttonClick=()=>{
       this.setState({
           message:'GoodBye Jioni'

       })
   }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.buttonClick.bind(this)}>Click</button> */}

                {/* <button onClick={()=>this.buttonClick()}>Click</button> */}

                <button onClick={this.buttonClick}>Click</button>
            </div>
        )
    }
}

export default EventBind
