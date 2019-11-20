import React from 'react';
import {
    Route,
    Switch,
    Link,
    BrowserRouter as Router
} from 'react-router-dom'
import Header from './header'
import Home from './home'
import Shps from './shps'
export default class AppRouter extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to='/'>首页</Link>
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