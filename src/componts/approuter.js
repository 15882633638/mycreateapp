import React from 'react';
import {
    Route,
    Switch,
    Link,
    BrowserRouter as Router
} from 'react-router-dom'
import Header from './header'
import Home from './home'
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
                </ul>
                <Switch>
                    <Route path='/' exact component={Header}></Route>
                    <Route path='/home' exact component={Home}></Route>
                </Switch>
            </Router>
        )
    }
}