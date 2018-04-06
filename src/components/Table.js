import React, { Component } from 'react';
import Item from './Item'
class Table extends React.Component {
    
    render() {
        const items   = this.props.items;
        const element = items.map((item, index) => {
            return(
              <Item key={index} 
                    item={item} 
                    index={index} 
                    onClickDelete={this.props.onClickDelete}
                    onClickEdit={this.props.onClickEdit}>
              </Item>
            );
        })
        return(
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Công Việc</th>
                  <th scope="col">Mức độ ưu tiên</th>
                  <th scope="col">Chỉnh sửa</th>
                </tr>
              </thead>
              <tbody>
                {element}
              </tbody>
            </table>
        );
    }
}
export default Table;