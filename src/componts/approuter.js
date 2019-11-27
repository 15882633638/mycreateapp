import React from 'react';
import {
    Route,
    Switch,
    Link,
    BrowserRouter as Router
} from 'react-router-dom'
import Header from './Header'
import Home from './home'
import Shps from './shps'
import {connect} from 'react-redux'

import {withRouter} from "react-router-dom";
// import {getPosts} from '../service/post_api'


 class AppRouter extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        
    }
    componentDidMount(){
        // this.props.dispatch(async function(dispatch){
        //     const res = await getPosts();
        //     dispatch({
        //         type:'changedata',
        //         payload:res.data
        //     })
            
        // })
    }
    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to='/'>首页{this.props.prop.post}</Link>
                    </li>
                    <li>
                        <Link to='/home'>home界面</Link>
                    </li>
                    <li>
                        <Link to={`/shps?id=123&name=890`}>shps界面</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path='/' exact component={Header}></Route>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/shps' component={Shps}></Route>
                </Switch>
            </Router>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return{
        prop:state
    }
}
export default connect(mapStateToProps)(AppRouter) 