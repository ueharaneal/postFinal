import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import SelectPost from "./pages/SelectPost"
import SignUp from "./pages/SignUp"
function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element ={<Home/>}/>
					<Route path='/home' element ={<Home/>}/>
					<Route path ='/signup' element= {<SignUp/>}/>
					<Route path='/selectpost' element={<SelectPost/>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
