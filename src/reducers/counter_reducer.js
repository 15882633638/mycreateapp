
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
export default conterReducer