import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Breadcrumd from './components/Breadcrumd';
import Search from './components/Search';
import NewTask from './components/NewTask';
import Table from './components/Table';
import jobs from './mocdata/data';
import {filter, includes, orderBy as funcOrderBy, remove} from 'lodash';
const uuidv4 = require('uuid/v4');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items         : jobs,
      data          : null,
      orderBy       : null,
      orderDir      : null,
      itemSelected  : null,
      isShowForm    : false           
    }
  }

  handleDataSearch = (dataFromChild) => {
    this.setState({
      data : dataFromChild
    });
  };

  handleDataSort = (dataOrderByFromChild, dataOrderDirFromChild) => {
    this.setState({
      orderBy  : dataOrderByFromChild,
      orderDir : dataOrderDirFromChild 
    });
  };

  handleDataDelete = (id) => {
    let items = this.state.items;
    remove(this.state.items, (item) => {
      return item.id === id;
    });
    this.setState({
      items : items
    })
  }

  handleDataAdd = (item) => {
    let items = this.state.items;
    items.push({
        id    : uuidv4(),    
        name  : item.name,
        level : +item.level
    })
    this.setState({
      items : items
    })
  }

  //edit
  handleDataEdit = (item, isShowForm) => {
    this.setState({
      itemSelected : item,
      isShowForm   : isShowForm
    })
    
  }


  
  render() {
    let items = [...this.state.items];
    let itemSearch = [];
    let search = this.state.data;
    let {orderBy, orderDir} = this.state;
    
    
    //search
    if(search != null) {
      itemSearch = filter(items, (item) => {
        return includes(item.name.toLowerCase(), search.toLowerCase())
      })
    }else {
      itemSearch = items;
    }

    //sort
    itemSearch = funcOrderBy(itemSearch, [orderBy], [orderDir]);

    //delete
    
    //edit
    
    //return
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Breadcrumd></Breadcrumd>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <NewTask onclickAdd={this.handleDataAdd}></NewTask> 
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <Search handlerFromParant = {this.handleDataSearch} 
                      orderBy  = {orderBy} 
                      orderDir = {orderDir}
                      handleOrder = {this.handleDataSort}>
              </Search> 
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Table items={itemSearch} 
                    onClickDelete={this.handleDataDelete}
                    onClickEdit={this.handleDataEdit}
                    >
              </Table>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}
export default App;
            
             