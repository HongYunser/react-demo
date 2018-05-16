import React, { Component } from 'react';
import logo from './logo.svg';
import Content from './content';
import Footer from './footer/footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      title: "我是父组件 Parents",
    }
  }
  changeTitle(titlev) {
    this.setState({
      title: titlev,
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Content />
        <h1>{ this.state.title }</h1>
        <Footer name = "footer" fn={ this.changeTitle.bind(this) }  />
      </div>
    );
  }
}

export default App;
