import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
  } from "react-router-dom";

  import Main from "../views/Main";

function route() {
    return (
        <Router>
              {/* <Route path="/" component={MainNav} /> */}
              

                    <Switch>
                            <Route path="/"  component={Main} />
                    </Switch>
                   
                    {/* <Route path="/"  component={Test} /> */}
            </Router>
    )
}

export default route

