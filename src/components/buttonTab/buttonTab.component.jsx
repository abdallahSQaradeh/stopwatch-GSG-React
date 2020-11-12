import React from "react"
import "./buttonTab.style.scss"
const buttonTab = (props)=>
{
    return(<div className={`button-tab ${props.active?"active":''} `}>
        
    <ion-icon name={props.icon_name}></ion-icon>
    <span> {props.name}</span>

</div>)
}
export default buttonTab;