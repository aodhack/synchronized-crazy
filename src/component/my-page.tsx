import * as React from 'react';
import { BasePage } from "./base-page";
import { connectStore } from "./connect-store";
import { Button } from "@material-ui/core";

class MyPageView extends BasePage<{}> {
  render() {
    return (
      <div id="my-page">
        <Button />
      </div>
    );
  }
}

export const MyPage = connectStore(MyPageView);
