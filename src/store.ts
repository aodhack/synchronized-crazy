import { observable } from "mobx";
import createBrowserHistory from "history/createBrowserHistory";
import { History } from "history";
import { LangCode, PathDef } from "./const";

export class Store {
  private readonly history = createBrowserHistory();
  router = new Router(this.history);
}

export class SettingRepo {
  @observable
  lang = LangCode.ja;
}

export class Router {
  constructor(private history: History){}

  gotoMyPage() {
    this.history.push(PathDef.mypage);
  }
}
