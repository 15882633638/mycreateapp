import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRouter from './componts/approuter'
import { createStore, compose, applyMiddleware } from 'redux'
import { get } from 'axios';
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';

const conterReducer = function (state = { count: 1,post:null }, action) {
    
    switch (action.type) {
        case 'ADD':
            return {
                ...state, count: state.count + 1
            }
        case 'changedata':
            console.log(action.payload)
            return {
                ...state,post:action.payload
            }
        default: return state
    }

}
const getDatarequest = function(){
    return get('http://localhost:8080/')
}
const store = createStore(
    conterReducer,
    compose(
        applyMiddleware(...[thunk])
    )

)

store.dispatch(async function(dispatch){
    const res = await getDatarequest();
    dispatch({
        type:'changedata',
        payload:res.data
    })
    console.log(store.getState())
})

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
