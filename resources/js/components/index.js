import React from "react";
import { render } from "react-dom";
import { Switch, Route } from "react-router-dom";

export default () => { document.querySelector("#prepr") ? 
    render(() => {
        return (
            <Switch>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        );
    }, document.querySelector("#prepr"))
    : null;
};