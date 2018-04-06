import React, { Component } from 'react';
class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchValue : '',
        orderBy : '',
        orderDir: ''
      };
      this.handleSort = this.handleSort.bind(this);
    }

    handleSearch = (evt) => {
      evt.preventDefault();
      this.props.handlerFromParant(this.state.searchValue);
      this.setState({
        searchValue : ''
      })
    }

    handleChange = (event) => {
      this.setState({searchValue: event.target.value});
    }
    
    

    handleSort = (orderBy, orderDir) => {
      this.props.handleOrder(orderBy, orderDir);
    }
  
    render() {
      
        return(
            <div className="search">
              <div className="input-group mb-3">
              <div className="input-group-prepend">
                <button className="btn btn-outline-dark dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort</button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#" onClick={() => this.handleSort('name', 'asc')}>Name Asc</a>
                  <a className="dropdown-item" href="#" onClick={() => this.handleSort('name', 'desc')}>Name Desc</a>
                  <div role="separator" className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#" onClick={() => this.handleSort('level', 'asc')}>Level Asc</a>
                  <a className="dropdown-item" href="#" onClick={() => this.handleSort('level', 'desc')}>Level Desc</a>
                </div>
              </div>
                <input type="text" className="form-control" placeholder="search task" aria-label="Recipient's username" aria-describedby="basic-addon2" 
                    value={this.state.searchValue} onChange={this.handleChange} />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2" onClick = {this.handleSearch}>Search</span>
                </div>
              </div>
            </div>
        );
    }
}
export  default Search; 