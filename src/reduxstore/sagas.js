import {takeEvery , put , all} from "redux-saga/effects"
import axios from "axios"


function *SignupGenerator(action){
    console.log(".......................... here i will write asnc action i.e api call")
    let apiurl = "https://apifromashu.herokuapp.com/api/register"
   yield put({
       type:"SIGNUP_STARTED"
   })
   var result  = yield axios({method:'post',url:apiurl,data:action.payload})
   if(result.data.message=="User Already Exists"){
      yield put({
          type:"SIGNUP_FAILED" ,
          payload:"DUPLICATE_EMAIL"
       })
   }
   else if(result.data.message=="User Registered"){
   yield  put({
        type:"SIGNUP_SUCCESS",
     })
   }
   else{
   yield put({
        type:"SIGNUP_FAILED" ,
        payload:"SOME ERROR OCCURRED"
     })
   }
   
}

function *SignupSaga(){
   yield takeEvery('SIGNUP' , SignupGenerator)
    // this function will be listenting to any action for Signup and it will write async logic here and call actions baed on outcome of that logic
}

function *SearchGenerator(action){
   let apiurl = process.env.REACT_APP_API_BASE_URL + "/searchcakes?q=" +action.payload
   yield put({
       type:"SEARCH_STARTED"
   })
   var result = yield axios({
       method:"get",
       url:apiurl
   })
   if(result.data.data){
       yield put({
           type:"SEARCH_SUCCESS",
           payload:result.data.data
       })
   }
   else{
       yield put({
           type:"SEARCH_FAILED",
           payload:"SOME ERROR OCCURRED"
       })
   }
}

function *SearchCakesSaga(){
   yield takeEvery('SEARCH', SearchGenerator)
}

function *cakeDetailsGenerator(action){
    let apiurl = process.env.REACT_APP_API_BASE_URL + "/cake/" +action.payload
    yield put({
        type:"CAKE_DETAILS_STARTED"
    })
    var result = yield axios({
        method:"get",
        url:apiurl
    })
    if(result.data.data){
        yield put({
            type:"CAKE_DETAILS_SUCCESS",
            payload:result.data.data
        })
    }
    else{
        yield put({
            type:"CAKE_DETAILS_FAILED",
            payload:"SOME ERROR OCCURRED"
        })
    }
}


function *getCakedetailsSaga(){
    yield takeEvery('CAKE_DETAILS', cakeDetailsGenerator)
 }
 


export default function *RootSaga(){
   yield all([SignupSaga(),SearchCakesSaga() , getCakedetailsSaga()])
}