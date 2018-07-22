import * as React from 'react';
import { BasePage } from "./base-page";
import { connectStore } from "./connect-store";
import { Button } from "@material-ui/core";
import { ExclamationIcon, MapIcon, NavigationIcon, NotePlusIcon } from "mdi-react";

class MyPageView extends BasePage<{}> {
  render() {
    return (
      <div id="my-page">

        <div className="my-page-section">
          旅をする人:
          <br/>
          <Button color="primary" variant='contained' onClick={this.nav.gotoJourneyCreate}>
            <NotePlusIcon/>旅を登録する</Button>
          <br/>
          <Button color="primary" variant='contained' onClick={this.nav.gotoJourney}>
            <NavigationIcon/>旅をする</Button>
          <br/>
        </div>

        <div className="my-page-section">
          行ってきてほしいところがある人:
          <Button color="secondary" variant='contained' onClick={this.nav.gotoMyPage}>
            <ExclamationIcon/>クエストを発布する</Button>
          <br/>
        </div>

        <div className="my-page-section">
          クエストと旅を見てみたい人:
          <Button variant='contained' onClick={this.nav.gotoDiscovery}>
            <MapIcon/>旅とクエストを見る
          </Button>
        </div>

      </div>
    );
  }
}

export const MyPage = connectStore(MyPageView);
