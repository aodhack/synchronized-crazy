import * as React from 'react';
import { BasePage } from "./base-page";
import { connectStore } from "./connect-store";

class MyPageView extends BasePage<{}> {

  render() {
    return (
      <div>
        MYPAGE
      </div>
    );
  }
}

export const MyPage = connectStore(MyPageView);
