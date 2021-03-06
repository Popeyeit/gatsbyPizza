import React from "react"
import {useContext} from 'react'
import {contextApp} from '../Context'
import Header from "../components/header/Header";

export default function Home() {
  const data = useContext(contextApp)

console.log(data);


  return (<div className='container'>

    <Header showBasket/>
    </div>)
}

