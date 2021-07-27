export function MainReducer(state={
    isuserloggedin:localStorage.token?true:false,
    cartitems:[]
}, action){
    console.log("this action hase come " , action)
    switch(action.type){
        case "LOGIN" :{
            state = {...state}
            state["isuserloggedin"]=true
            return state
        }
        case "LOGOUT" :{
            state = {...state}
            state["isuserloggedin"]=false
            localStorage.clear()
            return state
        }
        case "ADDTOCART" :{
            state = {...state}
            state["cartitems"].push(action.payload)
            return state
        }
        case "REMOVEFROMCART" :{
            state = {...state}
            state["cartitems"].splice(action.payload,1)
            return state
        }

        case "SINGUP_STARTED":{
            state = {...state}
            state["isprogress"] = true
        }

        case  "SIGNUP_SUCCESS" :{
            state = {...state}
            state["inprogress"] = false
            return state
        }

        case "SIGNUP_FAILED" :{
            state = {...state}
            state["inprogress"] = false
            return state
        }

        case "SEARCH_STARTED":{
            state = {...state}
            state["isprogress"] = true
        }

        case "SEARCH_SUCCESS":{
            state = {...state}
            state["isprogress"] = false
            state["searchresults"]  =  action.payload
        }

        case "SEARCH_FAILED":{
            state = {...state}
            state["isprogress"] = false
            state["searcherror"] = action.payload
        }

        case "CAKE_DETAILS_STARTED":{
            state = {...state}
            state["isprogress"] = true
        }
        case "CAKE_DETAILS_SUCCESS":{
            state = {...state}
            state["isprogress"] = false
            state["cakedetails"]=action.payload
        }
        case "CAKE_DETAILS_FAILED":{
            state = {...state}
            state["isprogress"] = false
            state["cakedetailserror"]="SOME ERROR OCCURRED"
        }





        default : return state
    }
}

export function PaymentReducer(state={}, action){

}