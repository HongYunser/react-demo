import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    constructor(props){
        super(props)
        this.name = this.props.name
        
    }
    click() {
        this.props.fn("我是子组件设置的标题，666666");
    }
    render() {
        return (
        <div className="App">
            <p>这是尾部组件{this.name}</p>
            <button onClick={()=>{this.click()}  }>点击我能修改父组件的标题哦</button>
        </div>
        );
    }
}

export default Footer;