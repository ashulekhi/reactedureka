import {Link} from "react-router-dom"
import {connect} from "react-redux"
import { useContext } from "react"
import { DiscountContext } from "./Home"
import Discount from "./Discount"


function Cake(props){
    var contextvalue  = useContext(DiscountContext)
    function addToCart(){
        props.dispatch({
            type:"ADDTOCART",
            payload:props.data
        })
    }
    return (
       <div class="card col-3" style={{width: "16rem"}}>
            <Link to={`/cake/${props.data.cakeid}`}>
             <img style={{height: "16rem"}} src={props.data.image} class="card-img-top" alt="..." /></Link>
             <div class="card-body">
                    <h5 class="card-title">{props.data.name}</h5>
                    <p class="card-text">{props.data.price}</p>
                    <Discount />


                    <button onClick={addToCart} className="btn btn-warning">Add To Cart</button>
            </div>
            
        </div>
    )
}

Cake = connect()(Cake)
export default Cake