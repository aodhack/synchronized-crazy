import * as RawTaipeiSpots from './taiwan-event-utf8.json';
import * as RawTaipeiWifi from './taiwan-wifi-utf8.json';
import { Spot } from "../types";

export const TaipeiSpots: Spot[] = RawTaipeiSpots.map((v: any) => ({
  name: v.actName,
  lat: v.latitude,
  lng: v.longitude,
}));

export const TaipeiWifi: Spot[] = RawTaipeiWifi;
