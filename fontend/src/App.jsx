// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx'

import Login from './pages/login/Login.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import ProductCreate from './pages/product/ProductCreate.jsx'
import ProductSingle from './pages/product/ProductSingle.jsx'
import ProductList from './pages/product/ProductList.jsx'
import TryOn from './pages/tryon/TryOn.jsx'

function App() {

	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					{/* Public routes */}
					<Route path="/login" element={<Login />} />
					<Route path="/create-product" element={<ProductCreate />} />
					<Route path="/try-on" element={<TryOn />} />
					<Route path="/products" element={<ProductList />} />
					<Route path="/product/:id" element={<ProductSingle />} />
					{/* Protected routes */}
					<Route
						path="/dashboard"
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>

					{/* Default redirect */}
					<Route path="*" element={<Login />} />
				</Routes>
				<Footer />
			</Router>

		</>

	)
}

export default App
