import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './componts/home'
class App extends React.Component{
  render(){
    const list = [123,234,57]
    return (
    
      <h1 className='box'>
        hello world
        <Home name1='吴颜冰' list = {list} age1={123}></Home>
      </h1>
    );
  }
  
}

export default App;
