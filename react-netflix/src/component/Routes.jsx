import React from "react";
import { Route, Switch } from "react-router";
import Error from "./errorpage/Error";
import Home from "./home/Home";
import Detailinfo from "./maincontainer/Detailinfo";
import Movies from "./movies/Movies";
import Popular from "./popular/Popular";
import Mylist from "./mylist/Mylist";
import Tvshows from "./tvshows/Tvshows";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/tvshows" component={Tvshows} />
        <Route path="/popular" component={Popular} />
        <Route path="/mylist" component={Mylist} />
        <Route path="/movies" component={Movies} />
        <Route path="/showdetail/:id" component={Detailinfo} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default Routes;
