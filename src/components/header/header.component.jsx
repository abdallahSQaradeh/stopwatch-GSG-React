import React from 'react'
import ButtonTab from "../buttonTab/buttonTab.component"
import "./header.style.scss"
const header= (props)=>
{
    return (<div className="header">
        <ButtonTab name="timer" icon_name="hourglass-outline"/>
        <ButtonTab name="stopwatch" icon_name="stopwatch-outline" active />
    </div>);
}
export default header;