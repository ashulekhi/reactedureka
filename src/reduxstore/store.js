import {createStore , combineReducers , applyMiddleware} from "redux"
import {MainReducer , PaymentReducer} from "./reducers"
import RootSaga from "./sagas"
import createSaga from "redux-saga"
// import thunk from "redux-thunk"
// var reducers = combineReducers({MainReducer,PaymentReducer})

//var store = createStore(reducers)

let sagaMiddleware =  createSaga()

var store = createStore(MainReducer , applyMiddleware(sagaMiddleware))

sagaMiddleware.run(RootSaga)

export default store



// var storedata = store.getState()

// Recommendation by react offical documentation is to make api calls or any logic outside the components 
// compoents should be displaying data 

// console.log("store data is" , storedata)



// var storedata = store.getState()

// console.log("store data after actula dispatch is" , storedata)



// console.log("state after logout is" , store.getState())