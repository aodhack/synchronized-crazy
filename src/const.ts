import { Spot } from "./types";

export const enum LangCode {
  ja,
  zhSim,
  zhTrad,
}

export namespace i18n {

}

export const PathDef = Object.freeze({
  mypage: '/',

  discover: '/discover',

  travel: '/travel',

  journeyCreate: '/journey/create',

  journey: '/journey',

  support: '/support',

  setting: '/setting',
});

export const TaipeiStation: Spot = {
  name: '台北車站',
  lng: 25.047778,
  lat: 121.517222,
};

