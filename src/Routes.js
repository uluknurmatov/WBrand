import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import WatchContextProvider from "./contexts/WatchContext";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import AddWatches from "./components/AddWatches/AddWatches";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";

import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./contexts/AuthContext";
import Footer from "./components/Footer/Footer";

const Routes = () => {
    return (
        <WatchContextProvider>
            <AuthContextProvider>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/login" component={SignIn} />
                        <Route exact path="/regist" component={SignUp} />
                        <Route exact path="/add" component={AddWatches} />
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/details/:id" component={Details} />
                        <Route exact path="/cart" component={Cart} />
                        <Redirect to="/" />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </AuthContextProvider>
        </WatchContextProvider>
    );
};

export default Routes;
