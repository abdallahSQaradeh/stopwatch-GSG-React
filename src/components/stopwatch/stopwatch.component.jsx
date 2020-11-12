import React ,{Component}from 'react'
import "./stopwatch.style.scss"
import StopWatchContent from "./stopwatch-content/stopwatch-content.component"
import StopWatchFooter from "./stopwatch-footer/stopwatch-footer.component"
class Stopwatch extends Component{
state={}
    render=()=>
    {

        return(
        <div className="stop-watch">
            <StopWatchContent/>
            <StopWatchFooter/>
       
      </div>
     )
    }
}
export default Stopwatch;