import React, { Component } from 'react';
class Item extends React.Component {
    

    showElementLevel = (level) => {
        let elementLevel = <span className="badge badge-pill badge-danger">High</span>;
        if( level === 0 ) {
                elementLevel = <span className="badge badge-pill badge-success">Small</span>
        } else if ( level === 1 ) {
                 elementLevel = <span className="badge badge-pill badge-primary">Medium</span>
        }
        return elementLevel;
    }
   

    //delete task
    handleDelete = (id) => {
        this.props.onClickDelete(id);
    }


    //edit task
    handleEdit = (item, isShowForm) => {
        this.props.onClickEdit(item, isShowForm);
    }


    render() {
        let item    = this.props.item;
        let name    = this.props.item.name;
        let level   = this.props.item.level;
        let index   = this.props.index;
        let id      = this.props.item.id;

        return(
            <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{name}</td>
                  <td>{this.showElementLevel(level)}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button   onClick={() => {this.handleEdit(item, this.state.isShowForm)}}  
                                type="button" 
                                className="btn btn-outline-secondary btn-sm">Edit</button>

                      <button   onClick={() => {this.handleDelete(id)}}  
                                type="button" className="btn btn-outline-secondary btn-sm">Remove</button>
                    </div>
                  </td>
            </tr>
        );
    }
}

export default Item;