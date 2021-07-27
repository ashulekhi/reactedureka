import {Link} from "react-router-dom"
import { connect } from "react-redux"
import axios from "axios"
function Login(props){
    function login(event){
        event.preventDefault()
        console.log(".......... user detials" , user)
        let apiurl = "https://apifromashu.herokuapp.com/api/login"
        axios({
            method:"post",
            url:apiurl,
            data:user
        }).then((response)=>{
            console.log("response from login api is" , response.data)
            if(response.data.token){
                localStorage.token = response.data.token
                props.dispatch({
                    type:"LOGIN",
                    payload:response.data
                })
                props.history.push("/")
            }
        }, (error)=>{
            console.log("error from login api is" , error)
        })
       
    }
    let user = {}
    function handleEmail(event){
       user.email = event.target.value
    }
    function handlePassword(event){
        user.password = event.target.value
     }
    return(
    <div style={{width:"50%" , margin:"auto"}}>
        <h1>Login Here</h1>
         <form>
            <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input onChange={handleEmail} type="email" className="form-control"  aria-describedby="emailHelp"></input>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input onChange={handlePassword} type="password" className="form-control"></input>
            </div>
            <div  className="from-group">
            <Link style={{float:"left"}} to="/signup">New User ? Click Here to Signup</Link>
            </div>
            <div className="form-group">
            <button onClick={login} style={{float:"right"}} type="submit" className="btn btn-primary">Login</button>
            </div>
            <div className="from-group">
            <Link style={{float:"right"}} to="/forgot">Forgot Password?</Link>
            </div>
       </form>
    </div>
       
    )
}

Login = connect()(Login)
export default Login