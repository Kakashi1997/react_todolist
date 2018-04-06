import React, { Component } from 'react';
class FormAddNewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          task_name  : '',
          task_level :  0
        };
        this.handleInputChange  = this.handleInputChange.bind(this);
        this.handleSubmit       = this.handleSubmit.bind(this);
    }
    //change
    handleInputChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value
        });
    }
    //submit
    handleSubmit(event) {
        let item = {
            name : this.state.task_name,
            level: this.state.task_level 
        }
        this.props.onclickAdd(item);
        this.props.onClickSubmit();
        event.preventDefault();
    }
    //edit
    



    render() {
        return (
            <form onSubmit ={this.handleSubmit}>
                <div className="input-group">
                    <input name="task_name" type="text" className="form-control" 
                    placeholder="Name of Task" onChange = {this.handleInputChange} value={this.state.task_name}
                    />
                    <div className="input-group-append">
                    <select name= "task_level" className="custom-select" id="inputGroupSelect01" 
                    onChange={this.handleInputChange} value={this.state.task_level} >
                        <option defaultValue>Choose</option>
                        <option value="0">Small</option>
                        <option value="1">Medium</option>
                        <option value="2">High</option>
                    </select>
                        <button type="submit" className="btn btn-outline-info" onClick = {this.handleSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}
export default FormAddNewTask;