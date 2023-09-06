import React from "react";


class Label extends React.Component{
    render(){
        const props = this.props;
        const style = props.isActive ? {background: "green"} : {background : "orange"}
        return <span onClick={props.onAction} className="list-label-item" style={style}>{props.isActive ? "Active": "NonActive"}</span>;

    }
}

export default Label;
