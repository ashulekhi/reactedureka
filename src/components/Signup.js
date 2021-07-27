import axios from "axios"
import { connect } from "react-redux"

function Signup (props){
    let user = {}
    let signup = (event)=>{
        event.preventDefault()
        props.dispatch({
            type:"SIGNUP",
            payload:user
        })
    }
    return(
    <div style={{width:"50%" , margin:"auto"}}>
        <h1>Signup Here</h1>
         <form>
         <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input onChange={(e)=>{user.name=e.target.value}} type="text" className="form-control"  aria-describedby="emailHelp"></input>
            </div>
            <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input onChange={(e)=>{user.email=e.target.value}} type="email" className="form-control"  aria-describedby="emailHelp"></input>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input onChange={(e)=>{user.password=e.target.value}} type="password" className="form-control"></input>
            </div>
            <div className="form-group">
            <button onClick={signup} style={{float:"right"}} type="submit" className="btn btn-primary">Signup</button>
            </div>
       </form>
    </div>
       
    )
}

export default connect()(Signup)