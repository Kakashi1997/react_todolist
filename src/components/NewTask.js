import React, { Component } from 'react';
import FormAddNewTask from './FormAddNewTask';

class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
    //submit
    handleSubmit = () => {
        this.setState({
            visible : false
        })
    }
    //show and hide form add
    handClick = () => {
        this.setState({
            visible : !this.state.visible
        })
    }
    
    //Edit
    

    render() {
        
        let formTask = null;
        let button = <button type="button" className="btn btn-info btn-block"  onClick= {this.handClick} >Add New Task</button>;
        if(this.state.visible === true) {
            formTask =  (
                <div className="formtask" >
                    <FormAddNewTask
                        onclickAdd={this.props.onclickAdd} 
                        onClickSubmit = {this.handleSubmit}
                        onClickEdit = {this.handleOnClickEdit}>
                    </FormAddNewTask>
                </div>
            );
        }
        if(this.state.visible === true) {
            button = <button type="button" className="btn btn-success btn-block" onClick= {this.handClick}>Close Add New Task</button>
        }
        return(
            <div className="newtask">  
                {button}
                {formTask}
            </div> 
        );
    }
}
export default NewTask;