import React from "react";
import Label from "./Label";
import "./style.css";

function ListItem(props){
  const {title, descr, isActive} = props
  return(
      <div className='list-item'>
      <hr/>
      <div className='list-description'>
        <h3>{title}</h3>
        <h5>{descr}</h5>
      </div>
      <div className='lists'>
        <Label onAction= {() => {
          console.log("parent clicked");
        }} isActive={isActive}/>
      </div>
      <hr/>
    </div>
    )
  }

export default ListItem;