import * as React from 'react';
import './app.css';

import { Store } from "./store";
import { StoreProvider } from "./component/connect-store";
import { Route, Switch } from "react-router";

export class App extends React.Component {

  store = new Store();

  public render() {
    return <StoreProvider value={this.store}><RootRouter/></StoreProvider>
  }
}

function RootRouter(props: {}) {
  return (
    <Switch>
      <Route path={}/>
    </Switch>
  )

}
