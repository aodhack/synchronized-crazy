import * as _ from 'lodash';
import { Pos, Spot } from "../types";
import { TaipeiStation } from "../const";
import { TaipeiSpots, TaipeiWifi } from "./external";

export namespace HereRest {
  const HereFixedParams = [
    `app_id=XQYxpQPbMML5nbAP7xyZ`,
    `app_code=rSvgDhqrv02aPP_sG88CwQ`,
    `language=ja`,
  ];

  function createUrl(endpoint: string, encodedParamComponents: string[]) {
    const params = encodedParamComponents.concat(HereFixedParams);
    return `${endpoint}?${params.join('&')}`;
  }

  function encodeLngLat(p: Pos) {
    const lngStr = _.toNumber(p.lng);
    const latStr = _.toNumber(p.lat);
    return `${lngStr},${latStr}`;
  }

  export async function waypointSequence(start: Spot, end: Spot, waypoint0: Spot, waypoint1: Spot)
    : Promise<RoutingWaypoints.RootObject> {
    const url = createUrl(
      'https://wse.cit.api.here.com/2/findsequence.json',
      [
        `start=start;${encodeLngLat(start)}`,
        `destination1=${waypoint0.name};${encodeLngLat(waypoint0)}`,
        `destination2=${waypoint1.name};${encodeLngLat(waypoint1)}`,
        `end=end;${encodeLngLat(end)}`,
        `mode=fastest;pedestrian;traffic:disabled`,
      ],
    );

    const res = await fetch(url);
    return await res.json();
  }

  export async function mapTile(center: Pos, zoomLevel: number): Promise<Blob> {
    const res = await fetch(mapTileUrl(center, zoomLevel));
    return await res.blob();
  }

  export function mapTileUrl(center: Pos, zoomLevel: number) {
    return createUrl(
      `https://image.maps.cit.api.here.com/mia/1.6/mapview`,
      [
        `c=${center.lat},${center.lng}`,
        `z=16`,
      ]
    );
  }

  export async function tryRouteSeq() {

    const start = TaipeiStation;
    const end = TaipeiStation;
    const w1 = TaipeiSpots[5];
    const w2 = TaipeiWifi[5];

    const seq = await waypointSequence(
      start,
      end,
      w1,
      w2
    );
    console.log(seq);
  }
}

/**
 * https://developer.here.com/documentation/routing-waypoints/topics/quick-start-simple-car.html の戻り値
 */
declare module RoutingWaypoints {

  export interface Waypoint {
    id: string;
    lat: number;
    lng: number;
    sequence: number;
    estimatedArrival?: any;
    estimatedDeparture?: any;
    fulfilledConstraints: any[];
  }

  export interface Interconnection {
    fromWaypoint: string;
    toWaypoint: string;
    distance: number;
    time: number;
    rest: number;
    waiting: number;
  }

  export interface TimeBreakdown {
    driving: number;
    service: number;
    rest: number;
    waiting: number;
  }

  export interface Result {
    waypoints: Waypoint[];
    distance: string;
    time: string;
    interconnections: Interconnection[];
    description: string;
    timeBreakdown: TimeBreakdown;
  }

  export interface RootObject {
    results: Result[];
    errors: any[];
    processingTimeDesc: string;
    responseCode: string;
    warnings?: any;
    requestId?: any;
  }
}

