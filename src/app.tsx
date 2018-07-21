import * as React from 'react';
import './app.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Store } from "./store";
import { StoreContext } from "./page/connect-store";
import { Route, Router, Switch } from "react-router";
import { PathDef } from "./const";
import { MyPage } from "./page/my-page";
import { DiscoverPage } from "./page/discover";

const theme = createMuiTheme({});

export class App extends React.Component {

  store = new Store();

  public render() {
    const { history } = this.store;
    return (
      <StoreContext.Provider value={this.store}>
        <Router history={history}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline>
              <Routes/>
            </CssBaseline>
          </MuiThemeProvider>
        </Router>
      </StoreContext.Provider>
    );
  }
}

function Routes(props: {}) {
  return (
    <Switch>
      <Route path={PathDef.mypage} exact component={MyPage}/>
      <Route path={PathDef.discover} exact component={DiscoverPage}/>
    </Switch>
  );
}
