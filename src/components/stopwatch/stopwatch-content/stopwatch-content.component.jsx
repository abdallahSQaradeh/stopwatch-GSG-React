import React from 'react'
import "./stopwatch-content.style.scss"
const stopwatch_content= (props)=>
{
    return(
            <div className="s-body">
                <span className="s-minutes">0</span><sub className="s-m">m</sub>
                <span className="s-seconds">0</span><sub>S</sub>
                <span className="s-m-seconds">00</span>
        </div>
        
    )
}
export default stopwatch_content;