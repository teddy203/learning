import { useReducer } from "react";

const reducer = (state, action) => {

    switch(action.type){
        case "increment":
            return + 1;
        case "decrement":
            return - 1;
        default:
            return state;
    }
}

const App = () => {
    const [count, dispatch] = useReducer(reducer, 0);

    return(
        <div>
            <h1>Count: {count}</h1>
            <br />
            <button onClick={()=>dispatch({type: "decrement"})}> - </button>
            <button onClick={()=>dispatch({type: "increment"})}> + </button>
        </div>
    )
}
export default App



