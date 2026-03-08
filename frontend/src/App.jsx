import { Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Builder from "./pages/Builder"

function App() {

return (

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/builder" element={<Builder/>}/>

</Routes>

)

}

export default App