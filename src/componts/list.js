import React from 'react';
export default class List  extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:props.list
        }
        
    }
    
    render(){
        return (
            <div>
                <ul>
                {this.state.list.map((item,index)=>{
                    return <li key={index}>
                    {item}
                    <button onClick={()=>{this.props.delet(index)}}>删除</button>
                    </li>
                })}
                </ul>
            </div>
        )
    }
}