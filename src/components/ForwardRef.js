import React from 'react'

const ForwardRef=React.forwardRef((props,ref)=> {
    return (
        <div>
            <h1>Forward Ref</h1>
           <input type='text' ref={ref}/> 
        </div>
    )
})

export default ForwardRef
