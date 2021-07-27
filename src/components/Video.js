let videoname = "Friends"

function Video(props){
    console.log("props received as input parameters are" , props)
    return (
        <div class="card" style={{width: "18rem"}}>
  <img style= {{height:"17rem"}} src={props.image} class="card-img-top img-fluid" alt="..." />
  <div class="card-body">
<h5 class="card-title">{props.name}</h5>
    <a onClick={()=>{props.fun("hey i passed the data to parent component using this technique")}} class="btn btn-primary">Play</a>
  </div>
</div>
    )
}

export default Video


// one file can export one defualt thing 


