import { useState , useEffect} from "react"
import axios from "axios"
import { connect } from "react-redux"
import store from "../reduxstore/store"

function Cakedetails(props){
    var [cake,setCake] = useState({})
    // var [second , setSecond] = useState()

    useEffect(()=>{
       var cakeid = props.match.params.cakeid

       store.subscribe(()=>{
           var data = store.getState()
           if(data.cakedetails){
               setCake(data.cakedetails)
           }
       })
       props.dispatch({
          type:"CAKE_DETAILS",
          payload:cakeid
       })
   
    } , [])
   
    return(
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <img src= {cake.image} style={{height:"300px" , width:"300px"}}></img>
                </div>
                <div className="col-5">
                <div>
                   <h2>{cake.name}</h2> 
                </div>
                <div>
                    {cake.price}
                </div>
                <div>
                    {cake.description}
                </div>
                <div>
                    {cake.occasion}
                </div>

                <div>
                    {cake.flavour}
                </div>
                </div>

                
            </div>


        </div>
    )
}

export default connect()(Cakedetails)