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
import { CreateJourneyPage } from "./page/journey-create";
import { TaipeiSpots, TaipeiWifi } from "./external/external";
import { JourneyWalk } from "./page/journey-walk";
import { HereRest } from "./external/here-api";

const theme = createMuiTheme({});

export class App extends React.Component {

  store = new Store();

  public render() {
    const { history } = this.store;
    return (
      <StoreContext.Provider value={this.store}>
        <Router history={history}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Routes/>
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
      <Route path={PathDef.journeyCreate} exact component={CreateJourneyPage}/>
      <Route path={PathDef.discover} exact component={DiscoverPage}/>
      <Route path={PathDef.journey} exact component={JourneyWalk} />
    </Switch>
  );
}

console.log('taipeispots', TaipeiSpots);
console.log('taipei wifi', TaipeiWifi);
HereRest.tryRouteSeq();
