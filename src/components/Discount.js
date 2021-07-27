import { useContext } from "react"
import { DiscountContext } from "./Home"

function Discount(){

    var contextvalue = useContext(DiscountContext)
    return (
        <div>
            Discount  : {contextvalue}
        </div>
    )
}


export default Discount