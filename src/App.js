import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Cart from "./Components/Cart";


function App()
{
  return<div className="container">
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
}
export default App;