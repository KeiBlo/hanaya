import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import './App.scss'
import HomeScreen from './screens/HomeScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import ProductsListScreen from './screens/ProductsListScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import AdminProductListScreen from './screens/AdminProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import SearchResultScreen from './screens/SearchResultScreen'
import ContactUsScreen from './screens/ContactUsScreen'
import AboutUsScreen from './screens/AboutUsScreen'
import FaqScreen from './screens/FaqScreen'
import DeliveryMethodsScreen from './screens/DeliveryMethodsScreen'

import Navigation from './components/navbar'

import Sidebar from './components/sidebar'
const App = () => {
  return (
    <Router>
      <Navigation />
      <div className='main-container'>
        <Route path='/order/:id' component={OrderScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/placeorder' component={PlaceOrderScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/aboutus' component={AboutUsScreen} />
        <Route path='/delivery' component={DeliveryMethodsScreen} />
        <Route path='/faq' component={FaqScreen} />
        <Route path='/contact' component={ContactUsScreen} />
        <Route
          path='/category/birthday/:pageNumber'
          component={ProductsListScreen}
          exact
        />
        <Route
          path='/category/newbaby/:pageNumber'
          component={ProductsListScreen}
          exact
        />
        <Route
          path='/category/romance/:pageNumber'
          component={ProductsListScreen}
          exact
        />
        <Route
          path='/category/anniversary/:pageNumber'
          component={ProductsListScreen}
          exact
        />
        <Route
          path='/category/congradulations'
          component={ProductsListScreen}
        />
        <Route path='/product/:id' component={ProductDetailsScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/admin/userlist' component={UserListScreen} />
        <Route path='/admin/user/:id/edit' component={UserEditScreen} />
        <Route
          path='/admin/productlist'
          component={AdminProductListScreen}
          exact
        />
        <Route
          path='/admin/productlist/:pageNumber'
          component={AdminProductListScreen}
          exact
        />
        <Route path='/admin/orderlist' component={OrderListScreen} />
        <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
        <Route path='/search/:keyword' component={SearchResultScreen} exact />
        <Route path='/page/:pageNumber' component={ProductsListScreen} exact />
        <Route path='/' component={HomeScreen} exact />
      </div>
      <Footer />
    </Router>
  )
}

export default App
