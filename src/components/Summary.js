import {Component} from "react"
import store from "../reduxstore/store"
import {connect} from "react-redux"

class Summary extends Component {
constructor(){
    super()
    this.state = {
        data : store.getState()["cartitems"]
    }
}

componentDidMount(){
    store.subscribe(()=>{
        var data = store.getState()["cartitems"]
        this.setState({
            data:data
        })
   })
}

removeFromCart = (index)=>{
    this.props.dispatch({
        type:"REMOVEFROMCART",
        payload:index
    })
}

render(){
    return(
        <div>
            <h1>Summary Page</h1>
            {this.state.data.map((each,index)=>{
                return <div key={index}>
                    <div className="row">
                        <div className="col-3">
                            <img src={each.image} style={{height:"100px",width:"100px"}}></img>
                        </div>
                        <div className="col-3">
                            <label>{each.name}</label>
                        </div>
                        <div className="col-3">
                        <label>{each.price}</label>
                        </div>
                          <div className="col-3">
                              <button onClick={this.removeFromCart.bind(null,index)} className="btn btn-danger">Remove</button>
                        </div>
                    </div>
                    </div>
            })}
        </div>
    )
}
}
Summary = connect()(Summary)
export default Summary