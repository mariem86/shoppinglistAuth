import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./component/route/PrivateRoute";
import { getAuthUser } from "./js/action/authAction";
import RegisterAdmin from "./component/auth/RegisterAdmin"
import Home from "./component/pages/Home";
import Dashboard from "./component/pages/Dashboard"
import AppNavbar from "./component/AppNavbar";
import ShoppingLists from "./component/shoppingList/shoppingLists";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";

import Memberlist from "./component/membre/MembreList";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
 const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser());
  useEffect(() => {
    getUser();
  }, []);
  return (
    <BrowserRouter>
      <AppNavbar />
      <Switch>
      
      <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login}  />
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard" component= {Dashboard }    />
        <Route path="/registeradmin" component={RegisterAdmin}/>
        < PrivateRoute path="/shopping-list" component={ShoppingLists}/>
        
        <PrivateRoute exact path="/memberlist" component={Memberlist}  />
       


        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
