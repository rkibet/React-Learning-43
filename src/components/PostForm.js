import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state).then(response=>{console.log(response)}).catch(error=>{console.log(error)})
    }

    render() {
        const{userId,title,body}=this.state
        return (
            <div>
                <h2>Post Form</h2>
                <form onSubmit={this.submitHandler}>
                   <div>
                   <input type='' name='userId' value={userId} onChange={this.changeHandler}/>
                   </div>
                   <br/>
                   <div>
                   <input type='' name='title' value={title} onChange={this.changeHandler}/>
                   </div>
                   <br/>
                   <div>
                   <input type='' name='body' value={body} onChange={this.changeHandler}/>
                   </div>
                  <br/>
                   <div>
                   <button type='submit'>Submit</button>
                   </div>
                </form>
            </div>
        )
    }
}

export default PostForm
