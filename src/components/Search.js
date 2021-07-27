import queryString from "query-string"
import { connect } from "react-redux"
import store from "../reduxstore/store"
import { Component } from "react"
import Cake from "./Cake"

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchresults:[],
            query:this.props.match.params.searchquery
        }
    }

    componentDidMount(){
       store.subscribe(()=>{
           var data = store.getState()
           if(data.searchresults){
               this.setState({
                   searchresults:data.searchresults
               })
           }
       })
       this.props.dispatch({
           type:"SEARCH",
           payload:this.state.query
       })
    }

    render(){
        return(
            <div>
                <h1>Search Cakes for  {this.state.query}</h1>
                <div className="row">
                {
                    this.state.searchresults.length>0 && this.state.searchresults.map((each,index)=>{
                            return <Cake data={each} key={index} />
                    })
                }

            {!this.state.searchresults.length>0 && <label className="alert alert-danger">No Results Found For {this.state.query}</label>}
                </div>
               
            </div>
        )
    }
}



export default connect()(Search)