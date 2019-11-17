import React from 'react';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            age:props.age1
        }
    }
    MakeOlder(){
        console.log(this)
        this.setState({
            age:this.state.age+=3
        })
    }
    render(){
        return (
        <div className='container'>
            <h1>Home</h1>
            <h1>your name is {this.props.name1}
            your age is {this.state.age}
            {
                this.props.list.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })
            }
            </h1>
            <button onClick= {()=>{
                this.MakeOlder()
            }}>Make older</button>
           
        </div>
        )
    }
}

