import React , {Component} from "react"
import Carousel from "./Carousel";
import Cake from "./Cake";
import axios from "axios"
import {ApolloClient , gql , InMemoryCache} from "@apollo/client"


let client  = new ApolloClient({
    cache : new InMemoryCache(),
    uri:"https://countries.trevorblades.com/"
})
export var DiscountContext = React.createContext()
var largerdata = "10%"
class Home extends Component{
    constructor(){
        super()
        this.state = {
            cakes:[]
        }
    }

    getBooks = ()=>{
        var query = gql`
        {
            countries {
                name
                code
                native
            }
        }
        `
        client.query({
            query:query
        }).then((response)=>{
            console.log("response from api is" , response)
            this.setState({
                countries : response.data.countries
            })
        }, (error)=>{
            console.log("Error from api is" , error)
        })
    }

    componentDidMount(){
        let apiurl = "https://apifromashu.herokuapp.com/api/allcakes"
       
        axios({
            method:"GET",
            url:apiurl
        }).then((response)=>{
            console.log("Response from all cakes api" , response.data)
            this.setState({
                cakes:response.data.data
            })
        },(error)=>{
            console.log("error from all cakes api" , error)
        })
    }

    render(){
        return(
            <div>
                {/* <Carousel />
                
                <div style={{marginTop:"2rem"}} className="row">
                    {this.state.cakes.map((each,index)=>{
                        return <DiscountContext.Provider value={largerdata}> <Cake key={index} data={each} /></DiscountContext.Provider>
                    })}
                </div> */}
<button onClick={this.getBooks}>Get Data</button>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">CountryName</th>
      <th scope="col">Country Code</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
                    this.state.countries && this.state.countries.map((each,index)=>{
                        return  <tr>
                        <th scope="row">{index+1}</th>
                        <td>{each.name}</td>
                        <td>{each.code}</td>
                        <td>View Details</td>

                </tr> 
                    })
                }
   
   
  </tbody>
</table>

                
            </div>
        )
    }
}

export default Home

//{name,price,image,cakeid}


// function Home(){
//     var [cakes,setCakes] = useState([])

//     return(
//         <div>
//             <Carousel />
//             <div style={{marginTop:"2rem"}} className="row">
//                 {cakes.map((each,index)=>{
//                     return <Cake key={index} data={each} />
//                 })}
//             </div>
//         </div>
//     )
// }