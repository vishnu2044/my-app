import React from "react";
import ListItem from './ListItem';
import Tools from "../components/tools";

let array = [
    {
    title: "Appointment for Septamber",
    desc : "the appintment for consult scheduled in Septamber",
    isActive : true
  },
    {
    title: "Appointment for October",
    desc : "the appintment for consult scheduled in october",
    isActive : false
  },
    {
    title: "Appointment for Novebember",
    desc : "the appintment for consult scheduled in Novebember",
    isActive : false
  },
    {
    title: "Appointment for December",
    desc : "the appintment for consult scheduled in December",
    isActive : true
  }
  ];

class List extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data : array,
      activeState : "active"
    }
  }

  onListChange = (event) => {
    console.log(event.target.value);
    const value = event.target.value

    const newList = array.filter((item) => {
      if (value === "all"){
        return true
      }
      if (value === 'active'){
        return item.isActive === true;
      }
      if (value === "nonactive"){
        return item.isActive === false;
      }
      return false;
    });
    this.setState({
      data: newList
    })
    
    
  } 

  render(){

    return(
      <Tools onAction={this.onListChange}>
        <div className='app-list'>
          {
            this.state.data.map((obj) => {
              return <ListItem title={obj.title} descr={obj.desc} isActive={obj.isActive}/>
      
            })
          }
          
        </div>
      </Tools>

    )
  }
}

export default List;
