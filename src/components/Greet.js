import React from 'react'

// function Greet(){
//     return <h1>Hello,Ronald And Welcome to React</h1>
// }
const Greet=props=>{
    return (
        <div>
        <h1>Hello Mr : {props.name} you are Know for : {props.otherName}</h1>
        <p>{props.children}</p>
        </div>
    )
}
// const Greet=({name,otherName,children})=>{
//     return (
//         <div>
//         <h1>Hello Mr : {name} you are Know for : {otherName}</h1>
//         <p>{children}</p>
//         </div>
//     )
// }
// const Greet=props=>{
//     const {name,otherName,children}=props
//     return (
//         <div>
//         <h1>Hello Mr : {name} you are Know for : {otherName}</h1>
//         <p>{children}</p>
//         </div>
//     )
// }
export default Greet