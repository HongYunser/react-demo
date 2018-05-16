import React, { Component } from 'react';
import './App.css';
import ChildrenCentent from './childrenCentent';

class Content extends Component {
  render() {
    return (
      <div className="App">
        <p>这是一个包含内容的组件</p>
        <ChildrenCentent />
      </div>
    );
  }
}

export default Content;