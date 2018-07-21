import * as React from 'react';
import './app.css';

import { Store } from "./store";
import { StoreContext } from "./component/connect-store";
import { Route, Router, Switch } from "react-router";
import { PathDef } from "./const";
import { MyPage } from "./component/my-page";

export class App extends React.Component {

  store = new Store();

  public render() {
    const { history } = this.store;
    return (
      <StoreContext.Provider value={this.store}>
        <Router history={history}>
          <Routes />
        </Router>
      </StoreContext.Provider>
    );
  }
}

function Routes(props: {}) {
  return (
    <Switch>
      <Route path={PathDef.mypage} component={MyPage} />
    </Switch>
  );
}
