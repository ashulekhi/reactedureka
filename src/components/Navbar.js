import { Component } from "react"
import {Link} from "react-router-dom"
import store from "../reduxstore/store"


class Navbar extends Component{
  constructor(){
    super()
    this.state = {
      isuserloggedin:store.getState()["isuserloggedin"]
    }
  }

  logout=()=>{
    this.setState({
      isuserloggedin:false
    })
    localStorage.clear()
  }

  componentDidMount(){
    store.subscribe(()=>{
      console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,," , store.getState())
      if(store.getState()["isuserloggedin"]==true){
        this.setState({
          isuserloggedin:true
        })
      }
    })
  }


  getSearchText = (event)=>{
    this.setState({
      searchtext:event.target.value
    })
   
  }

  render(){
    return(
            <div>
                 <nav class="navbar navbar-expand-lg navbar-light bg-light">
                 <Link to="/" class="navbar-brand">Ashu's Cake Gallery</Link>
                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <form style={{marginLeft:"50px"}} class="form-inline my-2 my-lg-0">
                <input onChange={this.getSearchText} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <Link to={`/search/${this.state.searchtext}`}><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
                </form>
                </ul>
               {!this.state.isuserloggedin && <form class="form-inline my-2 my-lg-0">
                <Link to="/login"><button class="btn btn-primary my-2 my-sm-0" type="submit">Login</button></Link>
                </form>}

                {this.state.isuserloggedin && <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-danger my-2 my-sm-0" type="submit" onClick={this.logout}>Logout</button>
                <Link style={{marginLeft:"50px"}} to="/cart"><button class="btn btn-warning my-2 my-sm-0" type="submit">Cart</button></Link>
                </form> }
                </div>
                </nav>
        </div>
    )
  }
}


export default Navbar