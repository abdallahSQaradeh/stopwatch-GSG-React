import React from 'react'
import "./container.style.scss"
import Header from "../header/header.component"
import Stopwatch from "../stopwatch/stopwatch.component"
const container = (props)=>
{

    return <div className="container">
            <Header/>
            <Stopwatch />
    </div>
}
export default container;