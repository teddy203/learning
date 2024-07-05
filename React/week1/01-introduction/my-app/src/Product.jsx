import { useParams } from "react-router-dom";

const Product = ()=>{
const[productId] = useParams ();

return( <div>
<h1>  Showing Product{productId}</h1>
    </div>
)
}

export default Product

