import React from "react";
import './tools.css';

class Tools extends React.Component{
    render(){
        const { 
            children, 
            onAction
        } = this.props;

        const onlyChild = React.Children.only(children);
        const count = React.Children.count(onlyChild.props.children)
        return (
            <div className="list-tools">
                <div className="list-header">
                    <select onChange={onAction} name="status">
                        <option value="all" >All</option>
                        <option value="active" >Active</option>
                        <option value="nonactive" >Non Active</option>
                    </select>
                    <br/>
                    <span>some of these are here</span>
                </div>
                {children}
                <div className="list-footer">
                    total {count} Appointments are here
                </div>
                
            </div>
        )
    }
}

export default Tools;