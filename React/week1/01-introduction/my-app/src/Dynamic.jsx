import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Product from './Product'

const App = () => {
return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/product/:productId" element={<Product />} />
</Routes>
</BrowserRouter>
)
}

export default App