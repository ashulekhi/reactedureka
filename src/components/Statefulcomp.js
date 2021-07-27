import {Component} from "react"

class Demo extends Component{
    constructor(){
        super()
        this.state={
            users:0,
            disabled:false,
            season:"Season 1"
        }
      
        console.log("inside constructor"  , this.props)
    }
    joinMeeting = ()=>{
        var disabled
        if(this.state.users==4){
            disabled=true
        }
        this.setState({
            users:this.state.users+1,
            name:"Ashu Lekhi",
            disabled:disabled
        })
    }

    changeSeason = (event)=>{
        console.log("event targte" , event.target.value)
        this.setState({
            season:event.target.value
        })
       
    }
    render(){
        return(
            <div>
                 online users :{this.state.users}
            <button disabled={this.state.disabled} className="btn btn-primary" onClick={this.joinMeeting}>Join Meeting</button>
        <h1>Hello {this.props.prop1}</h1>
        <select onChange={this.changeSeason}>
            <option value="season1">Season 1</option>
            <option value="season2">Season 2</option>
            <option value="season3">Season 3</option>
            <option value="season4">Season 4</option>

        </select>


    <button className="btn btn-info">{this.state.season}</button>
            </div>
        )
    }
}

export default Demo