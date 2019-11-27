import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './componts/home'
import Header from './componts/Header'
import List from './componts/list'
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      content:'这是传递进去的参数',
      list:[1,2,3,4]
    }
  }
  Ongrete(age){
    alert(age)
    this.setState({
      content:age
    })

  }
  delet(index){
    console.log(index)
    let listnow = this.state.list;
    listnow.splice(index,1);
    this.setState({
      list:listnow
    })
  }
  Add(index){
    let listnow = this.state.list;
    listnow.push(index);
    this.setState({
      list:listnow
    })
  }
  render(){
    const list = [123,234,57]
    return (
    
      <h1 className='box'>
        hello world
        {/* <Home name1='吴颜冰' list = {list} age1={123} grete = {this.Ongrete.bind(this)}></Home>
        <Header content={this.state.content}></Header> */}
        <List list = {this.state.list} delet={(index)=>{this.delet(index)}} Add = {(index)=>{this.Add(index)}}></List>
      </h1>
    );
  }
  
}

export default App;
