import { observable } from "mobx";
import createBrowserHistory from "history/createBrowserHistory";
import { History } from "history";
import { LangCode, PathDef } from "./const";

export class Store {
  readonly history = createBrowserHistory();
  nav = new Nav(this.history);
}

export class SettingRepo {
  @observable
  lang = LangCode.ja;
}

export class Nav {
  constructor(private history: History){}

  gotoMyPage() {
    this.history.push(PathDef.mypage);
  }
}
