import React, { Component } from 'react';
class Breadcrumd extends Component {
    render() {
        return (
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
            </nav>
        );
    }
}
export default Breadcrumd;