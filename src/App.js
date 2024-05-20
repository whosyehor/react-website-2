import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/pages/Home'
import Products from './Components/pages/Products'
import Services from './Components/pages/Services'
import SignUp from './Components/pages/SignUp'

function App() {
	return (
		<Router>
			<Navbar />
			<div>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/services' element={<Services />}></Route>
					<Route path='/products' element={<Products />}></Route>
					<Route path='/sign-up' element={<SignUp />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
