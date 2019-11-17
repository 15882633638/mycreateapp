import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './componts/home'
import Header from './componts/header'
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      content:'这是传递进去的参数'
    }
  }
  Ongrete(age){
    alert(age)
    this.setState({
      content:age
    })

  }
  render(){
    const list = [123,234,57]
    return (
    
      <h1 className='box'>
        hello world
        <Home name1='吴颜冰' list = {list} age1={123} grete = {this.Ongrete.bind(this)}></Home>
        <Header content={this.state.content}></Header>
      </h1>
    );
  }
  
}

export default App;
