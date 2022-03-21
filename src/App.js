import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/Navigation/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import SignInForm from "./components/Auth/SignInForm";
import { useLocation, useRouteMatch } from "react-router-dom";
import NewAccountForm from "./components/Auth/NewAccountForm";
import ProductsPage from "./pages/ProductsPage";
import InfoPage from "./pages/InfoPage";
import CartPage from "./pages/CartPage";
import WlistPage from "./pages/WlistPage";
import PaymentPage from "./pages/PaymentPage";
import SearchPage from "./store/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import {useSelector} from 'react-redux'

function App() {
  const location = useLocation();
  const [locationMatched, setLocationMatched] = useState(false);
  const authStatus = useSelector(state => state.auth.isLoggedIn)


  const path = location.pathname;

  useEffect(() => {
    setLocationMatched(false);
    if (path === "/sign-in" || path === "/new-account") {
      setLocationMatched(true);
      
    }
  }, [location, path]);

  return (
    <div className="App">
      {!locationMatched && <Header />}
      {!locationMatched && <NavBar />}

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/sign-in" exact>
          {authStatus ? <Redirect to="/" /> : <SignInForm />}
          
        </Route>
        <Route path="/new-account" exact>
          {authStatus ? <Redirect to="/" /> : <NewAccountForm />}
          
        </Route>
        <Route path="/products/:any" exact>
          <ProductsPage />
        </Route>
        <Route path="/product/info/:item" exact>
          <InfoPage />
        </Route>
        <Route path="/cart" exact>
          {authStatus ? <CartPage /> : <Redirect to="/sign-in" />}
          
        </Route>
        <Route path="/wishlist" exact>
          {authStatus ?  <WlistPage /> : <Redirect to="/sign-in" />}
         
        </Route>
        <Route path="/payment">
          <PaymentPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="*" exact>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
