import React from 'react';


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'这是header组件'
        }
        
    }
    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>
                {this.props.content}
            </div>
        )
    }
}
export default Header