import * as React from 'react';
import { BasePage } from "./base-page";
import { connectStore } from "./connect-store";

class MyPageView extends BasePage<{}> {
  render() {
    console.log(this.props);

    return (
      <div>
        MYPAGE
      </div>
    );
  }
}

export const MyPage = connectStore(MyPageView);
