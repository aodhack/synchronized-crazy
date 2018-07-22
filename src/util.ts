import * as _ from 'lodash';
import { Pos } from "./types";

export function findCenter(p1: Pos, ...points: Pos[]): Pos {

  const _p = [p1].concat(points);

  return ({
    lat: _.mean(_p.map(p => _.toNumber(p.lat))),
    lng: _.mean(_p.map(p => _.toNumber(p.lng))),
  });
}
