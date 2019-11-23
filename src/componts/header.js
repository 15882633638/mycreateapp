import React from 'react';

import { withRouter } from 'react-router';

class Header extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            name:'这是header组件'
        }
        
    }
    href(){
        console.log(this.props)
        const {history} = this.props;
        history.push('/home')
    }
    render(){
        return (
            <div onClick = {this.href.bind(this)}>
                <h1>{this.state.name}</h1>
                {this.props.content}
            </div>
        )
    }
}
export default Header