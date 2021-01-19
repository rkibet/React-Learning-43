import React from 'react'
import Person from './Person'

function NameList() {
    const names=['Kenny Mwatela','David Kimeli','Charles Munene','Andrew Kidula','Charles Munene']

    const nameList=names.map((name,index)=><h2 key={index}>{index}{name}</h2>)

    const Persons=[
        {
            id:1,
            name:'Kenny Mwatela',
            age:45,
            skill:'Java'
        },        {
            id:2,
            name:'David Kimeli',
            age:50,
            skill:'Html'
        },        {
            id:3,
            name:'Andrew Kidula',
            age:31,
            skill:'Kotlin'
        },        {
            id:4,
            name:'Charles Munene',
            age:23,
            skill:'Android'
        }
    ]
    const personList=Persons.map(person=><Person key={person.id} person={person}/>)
    return (
        <div>{nameList}</div>
    )
}

export default NameList
