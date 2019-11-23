import { createStore, compose, applyMiddleware } from 'redux'
import conterReducer from './reducers/counter_reducer'
import thunk from 'redux-thunk'
const store = createStore(
    conterReducer,
    compose(
        applyMiddleware(...[thunk])
    )

)
//  store.dispatch(async function(dispatch){
//     const res = await getDatarequest();
//     dispatch({
//         type:'changedata',
//         payload:res.data
//     })
//     console.log(store.getState())
// })
export default store