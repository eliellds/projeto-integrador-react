import React from "react"
import { Switch, Route} from "react-router-dom"

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Category from './pages/Category/Category'
import Checkout from './pages/Checkout/Checkout'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Product from './pages/Product/Product'
import Register from './pages/Register/Register'
import Success from './pages/Success/Success'
import NotFound from "./pages/NotFound/NotFound"
import Catalog from "./pages/Catalog/Catalog"
import Sales from "./pages/Sales/Sales"
import Search from "./pages/Search/Search"
import About from "./pages/About/About"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/category" component={Category}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/login" component={Login}/>
            <Route path="/product/:id" component={Product}/>
            <Route path="/register" component={Register}/>
            <Route path="/success" component={Success}/>
            <Route path="/catalog" component={Catalog}/>
            <Route path="/sales" component={Sales}/>
            <Route path="/search" component={Search}/>
            <Route path="/about" component={About}/>
            <Route path="/forgotpassword" component={ForgotPassword}/>
            <Route component={NotFound}/>
        </Switch>
    )
}