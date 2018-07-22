import { action, observable } from "mobx";
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

  @action.bound
  gotoMyPage() {
    this.history.push(PathDef.mypage);
  }

  @action.bound
  gotoJourney() {
    this.history.push(PathDef.journey);
  }

  gotoJourneyCreate() {
    this.history.push(PathDef.journeyCreate);
  }

  @action.bound
  gotoDiscovery() {
    this.history.push(PathDef.discover);
  }
}
