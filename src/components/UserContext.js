import React from 'react'

const UserContext=React.createContext('Agronsons')
const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}