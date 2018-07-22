import { Pos, Spot } from "../types";

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

  export async function waypointSequence(start: Spot, end: Spot, waypoint0: Spot, waypoint1: Spot) {
    const url = createUrl(
      'https://wse.cit.api.here.com/2/findsequence.json',
      [
        `start=p0;${start.lat},${start.lng}`,
        `destination1=p1;${waypoint0.lat},${waypoint0.lng}`,
        `destination2=p2;${waypoint1.lat},${waypoint1.lng}`,
        `end=p3;${end.lat},${end.lng}`,
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
}
