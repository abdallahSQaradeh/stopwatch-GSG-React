import React from 'react'
import "./stopwatch-content.style.scss"
const stopwatch_content= (props)=>
{
    return(
            <div className="s-body">
                <span className="s-minutes">{props.minutes>0? props.minutes:''}</span><sub className="s-m">{props.minutes>0? 'm':''}</sub>
                <span className="s-seconds">{props.seconds}</span><sub>S</sub>
    <span className="s-m-seconds">{props.milliseconds}</span>
        </div>
        
    )
}
export default stopwatch_content;