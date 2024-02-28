import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import AboutPage from "./pages/AboutPage"
import FindPostPage from "./pages/FindPostPage"
import AdminPage from "./pages/AdminPage"

//guardedRoutes
import AFindPostPage from "./pages/authPages/AFindPostPage"

import NavBar from "./components/NavBar"

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/home' element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/findapost' element={<FindPostPage />} />
					<Route path='/signin' element={<SignInPage />}></Route>
					<Route path='/admin' element={<AdminPage />}></Route>

					<Route path='/findapost/auth' element={<AFindPostPage/>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
