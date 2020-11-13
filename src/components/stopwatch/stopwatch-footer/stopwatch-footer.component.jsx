import React from 'react'
import "./stopwatch-footer.style.scss"

const stopwatch_footer = (props)=>
{

    return (
        <div className="s-footer">
        <div className="s-controls">
          <div className="s-start" onClick={props.start} >{`${props.reset_flag?'Start':'stop' }`}</div>
          <div className="s-reset" onClick={props.reset}>Reset</div>
        </div>
        <div className="resize"><ion-icon name="expand-outline"></ion-icon></div>
      </div>
    )
}
export default stopwatch_footer;