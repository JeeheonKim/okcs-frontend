import React from "react";
import PropTypes from "prop-types";
import {Route, Switch} from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Profile from "../Routes/Profile";
import About from "../Routes/About";

const LoggedInRoutes = () => (
    <>
        <Route exact path="/" component={Feed}/>
        <Route exact path="/explore" component={Explore}/>
        <Route exact path="/" component={About}/>
        <Route path="/:username" component={Profile}/>
    </>
);

const LoggedOutRoutes = () => (
    <>
        <Route exact path="/about" component={About}/>
        <Route exact path="/username" component={Auth}/>
    </>
);

const AppRouter = ({isLoggedIn}) => (
        <Switch>{isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>}</Switch>
);

// IMPORTANT
AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;