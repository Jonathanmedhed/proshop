import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import ProfileScreen from './screens/ProfileScreen'
import ProductScreen from './screens/ProductScreen'
import ProductListScreen from './screens/ProductListScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import ShippingScreen from './screens/ShippingScreen'
import OrderScreen from './screens/OrderScreen'
import OrderListScreen from './screens/OrderListScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import { Container } from 'react-bootstrap'

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Container className="py-3">
					<Route path="/order/:id" component={OrderScreen} />
					<Route path="/placeorder" component={PlaceOrderScreen} />
					<Route path="/payment" component={PaymentScreen} />
					<Route path="/shipping" component={ShippingScreen} />
					<Route path="/register" component={RegisterScreen} />
					<Route path="/profile" component={ProfileScreen} />
					<Route path="/login" component={LoginScreen} />
					<Route path="/product/:id" component={ProductScreen} />
					<Route path="/cart/:id?" component={CartScreen} />
					<Route path="/admin/userList" component={UserListScreen} />
					<Route path="/admin/productList" component={ProductListScreen} exact />
					<Route path="/admin/productList/:pageNumber" component={ProductListScreen} exact />
					<Route path="/admin/user/:id/edit" component={UserEditScreen} />
					<Route path="/admin/product/:id/edit" component={ProductEditScreen} />
					<Route path="/admin/orderList" component={OrderListScreen} />
					<Route path="/search/:keyword" component={HomeScreen} exact />
					<Route path="/page/:pageNumber" component={HomeScreen} exact />
					<Route path="/search/:keyword/page/:pageNumber" component={HomeScreen} exact />
					<Route path="/" component={HomeScreen} exact />
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
