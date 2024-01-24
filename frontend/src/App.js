import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Navbar } from "flowbite-react"
import NavBar from "./components/NavBar"

import Home from "./pages/Home"
import SelectPost from "./pages/SelectPost"
import Register from "./pages/Register"
function App() {
	return (
		<div className="">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/register' element={<Register />} />
					<Route path='/selectpost' element={<SelectPost />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
