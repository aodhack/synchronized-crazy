import * as React from 'react';
import { BasePage } from "./base-page";
import { connectStore } from "./connect-store";
import { Button } from "@material-ui/core";

class MyPageView extends BasePage<{}> {
  render() {
    return (
      <div id="my-page">
        <Button color="primary" variant='contained' onClick={this.nav.gotoMyPage}>旅をする</Button>
        <br />
        <Button color='secondary' variant='contained' onClick={this.nav.gotoDiscovery}>応援をする</Button>
      </div>
    );
  }
}

export const MyPage = connectStore(MyPageView);
