import {Route, Redirect , NavLink} from "react-router-dom"
import Summary from "./Summary"
import Address from "./Address"
import Payment from "./Payment"
import Confirmation from "./Confirmation"

import store from "../reduxstore/store"
function Cart(){
    return(
        <div classname="container">
            <div className="row">
                <div className="col-4">
                    
                        <div className="alert alert-primary">
                            <NavLink activeClassName="alert alert-warning" to="/cart/summary">Summary</NavLink>
                        </div>
                        <div className="alert alert-primary">
                            <NavLink activeClassName="alert alert-warning" to="/cart/address">Address</NavLink>
                        </div>
                        <div className="alert alert-primary"> 
                            <NavLink activeClassName="alert alert-warning" to="/cart/payment">Payment</NavLink>
                        </div>
                        <div className="alert alert-primary">
                            <NavLink activeClassName="alert alert-warning" to="/cart/confirmation">Confirmation</NavLink>
                        </div>
                </div>
                <div className="col-8">
                    <Route exact path="/cart"><Redirect to="/cart/summary"></Redirect></Route>
                    <Route exact path="/cart/summary" component={Summary} />
                    <Route  exact path="/cart/address" component={Address}/>
                    <Route  exact path="/cart/payment" component={Payment}/>
                    <Route  exact path="/cart/confirmation" component={Confirmation} />
                </div>

            </div>
           
        </div>
    )
}

export default Cart