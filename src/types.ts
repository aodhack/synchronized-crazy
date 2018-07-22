export interface TravelPlan {
  traveller: string;

  startDate: string;
  endDate: string;

  start: Spot;
  dest: Spot;

  memo: string;
}

export interface Pos {
  lat: number | string;
  lng: number | string;
}

export interface Spot extends Pos {
  name: string;
}
