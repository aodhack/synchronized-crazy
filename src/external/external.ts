import * as RawTaipeiSpots from './taiwan-event-utf8.json';
import { Spot } from "../types";

export const TaipeiSpots: Spot[] = RawTaipeiSpots.map((v: any) => ({
  name: v.actName,
  lat: v.latitude,
  lng: v.longitude,
}));
