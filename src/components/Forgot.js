import {useState, Component, useEffect} from "react"

function Forgot(){
    // var [property,properyHandlerfunction] = useState(initialvalue)
    var [email,setEmail] = useState()
    var  [users , setUsers] = useState(0)
    var useremail = undefined
    var recover  =  function(){
     alert(useremail)  
    }

    var joinMeeting  =  function(e){
        setUsers(users+1) 
        e.preventDefault()
       }

    useEffect(()=>{
        console.log("will be called only on did mount")
    },[])
    useEffect(()=>{
        console.log("will be called on every re render")
    },[users])


    var handleEmail = function(e){
      useremail = e.target.value
      setEmail(e.target.value)
    }
    return(
        <div style={{width:"50%" , margin:"auto"}}>
        <h1>Recover Your Password Here</h1>
        {users}
         <form>
            <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input onChange={handleEmail} type="email" className="form-control"  aria-describedby="emailHelp"></input>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
           
            
            <div className="form-group">
            <button onClick={recover} style={{float:"right"}} type="submit" className="btn btn-primary">Recover</button>
            <button onClick={joinMeeting} style={{float:"right"}} type="submit" className="btn btn-warning">Join</button>
            
            </div>
           
       </form>
    </div>
    )
}


// class Forgot extends Component{
//     constructor(){
//         super()
//         this.state = {
//             users:0
//         }
//     }

//     joinMeeting = ()=>{
//         this.setState({
//             users:this.state.users+1
//         })
//     }

//     render(){
//         return (
//             <div>
//                 <div>Online Users : {this.state.users}</div>
//                       <button onClick={this.joinMeeting}>Join</button>
//                 </div>
//         )
//     }
// }

export default Forgot