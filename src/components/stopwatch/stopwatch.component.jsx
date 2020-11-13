import React ,{Component}from 'react'
import "./stopwatch.style.scss"
import StopWatchContent from "./stopwatch-content/stopwatch-content.component"
import StopWatchFooter from "./stopwatch-footer/stopwatch-footer.component"
class Stopwatch extends Component{
   
        s_current_timer=0;
        interval=0;
        last_update=0;
        start=0;
        s_seconds=0;
         s_milSeconds = 0;
         s_minutes=null;

    
state={
    minutes:0,
    seconds:0,
    milliseconds:0,
    reset:true
}
    startTimeHandler=(e)=>
    {
       
        this.setState({reset:false})
        if(e.target.textContent.toLowerCase()==='start')
        {
            e.target.textContent='stop'
            if(!this.s_interval)
            {
                this.s_last_update = new Date().getTime();
                this.s_interval = setInterval(this.update,1)
            }
        }
            else if(e.target.textContent.toLowerCase()==="stop")
        {
            e.target.textContent='start'
            this.stopTimer();
 
        }
        
            
    }
   update=()=>{
 
        let s_now =new Date().getTime(),
        s_dt = s_now - this.s_last_update;
        this.s_current_timer+=s_dt;
        let s_time = new Date(this.s_current_timer);
        this.setState(({seconds})=>({seconds:this.pad(s_time.getSeconds())}))
        this.setState(({milliseconds})=>({milliseconds:this.pad( parseInt( s_time.getMilliseconds()/10))}))
        
        this.s_last_update = s_now;
        if(s_time.getMinutes()!=0)
        {
             
            this.setState({minutes:this.pad(s_time.getMinutes())});
        }
    
    }
     pad=(n)=>{
         console.log(n)
        return ("" + n).substring(-2)
    }
    resetTimer=()=>
    {
        this.stopTimer();
        clearInterval(this.interval);
        this.s_interval=0;
        this.s_current_timer=0;
        this.setState({seconds:0,milliseconds:0,minutes:0,reset:true})
    
    }
    stopTimer=()=>{

        clearInterval(this.s_interval);
        this.s_interval  =0;
    }
    render=()=>
    {

        return(
        <div className="stop-watch">
            <StopWatchContent minutes={this.state.minutes} seconds={this.state.seconds} milliseconds={this.state.milliseconds}/>
            <StopWatchFooter start={this.startTimeHandler} reset={this.resetTimer} reset_flag={this.state.reset} />
       
      </div>
     )
    }
}
export default Stopwatch;