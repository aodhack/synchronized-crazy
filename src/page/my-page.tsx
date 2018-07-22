import * as React from 'react';
import { BasePage } from "./base-page";
import { connectStore } from "./connect-store";
import { Button } from "@material-ui/core";
import { ExclamationIcon, MapIcon, NavigationIcon } from "mdi-react";

class MyPageView extends BasePage<{}> {
  render() {
    return (
      <div id="my-page">
        <Button color="primary" variant='contained' onClick={this.nav.gotoMyPage}>
          <NavigationIcon />旅をする</Button>
        <br/>
        <Button color="secondary" variant='contained' onClick={this.nav.gotoMyPage}>
          <ExclamationIcon />クエストを発布する</Button>
        <br/>
        <Button variant='contained' onClick={this.nav.gotoDiscovery}>
          <MapIcon />旅とクエストを見る
        </Button>
      </div>
    );
  }
}

export const MyPage = connectStore(MyPageView);
