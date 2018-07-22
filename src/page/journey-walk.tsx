import * as React from 'react';

import { BasePage } from "./base-page";
import { connectStore } from "./connect-store";
import { TaipeiStation } from "../const";
import { TaipeiSpots, TaipeiWifi } from "../external/external";
import { Spot } from "../types";
import {
  Avatar,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography
} from "@material-ui/core";
import { CrosshairsGpsIcon, DeleteIcon, PinIcon, WifiIcon } from "mdi-react";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { observer } from "mobx-react";
import { HereRest, RoutingWaypoints } from "../external/here-api";
import { action, observable } from "mobx";
import { findCenter } from "../util";

interface State {
  start: Spot,
  end: Spot,
  p1?: Spot;
  p2?: Spot;
}

@observer
class JourneyWalkView extends BasePage<{}, State> {

  @observable.ref
  private route?: IPromiseBasedObservable<RoutingWaypoints.RootObject>;

  constructor(props: {}) {
    super(props as any);
    this.refreshRoute();
  }

  state: State = {
    start: TaipeiStation,
    end: TaipeiStation,
    p1: TaipeiSpots[2],
    p2: TaipeiWifi[66],
  }

  @action.bound
  refreshRoute() {
    const { start, end, p1, p2 } = this.state;
    if (p1 && p2) {
      this.route = fromPromise(HereRest.waypointSequence(start, end, p1, p2));
    } else {
      this.route = undefined;
    }
  }

  renderSpotSelection() {
    const { p1, p2 } = this.state;
    if (p1 && p2) {
      return (
        <div className="journey-walk">
          <div>
            <Typography gutterBottom variant="headline" component="h2">
              選ばれた計画:
            </Typography>

            <List className="journey-spot-selected">
              <ListItem>
                <Avatar>
                  <CrosshairsGpsIcon/>
                </Avatar>
                <ListItemText
                  primary={TaipeiStation.name}
                  secondary="出発地"
                />
              </ListItem>
              <ListItem>
                <Avatar>
                  <PinIcon/>
                </Avatar>
                <ListItemText
                  primary={p1.name}
                  secondary="イベント"
                />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Delete">
                    <DeleteIcon/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <Avatar>
                  <WifiIcon/>
                </Avatar>
                <ListItemText
                  primary={p2.name}
                  secondary="free wifi"
                />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Delete">
                    <DeleteIcon/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <Avatar>
                  <CrosshairsGpsIcon/>
                </Avatar>
                <ListItemText
                  primary={TaipeiStation.name}
                  secondary="目的地"
                />
              </ListItem>
            </List>

            <List className="journey-spot-list">

            </List>
          </div>
        </div>
      );
    }
    return null;
  }

  renderMap() {
    const { route } = this;
    const { start, end, p1, p2 } = this.state;
    if (route && p1 && p2) {
      const c = findCenter(start, end, p1, p2);

      const imgUrl = HereRest.mapTileUrl(c, 10);

      return (
        <img src={imgUrl}/>
      );
    } else return 'スポットを選択してください';
  }

  renderRoute() {
    const { route } = this;

    if (!route || route.state === 'pending') return '経路検索しています';

    return route.case<React.ReactNode>({
      fulfilled: (f: RoutingWaypoints.RootObject) => {

        const { start, end } = this.state;
        const connections = f.results[0]!.interconnections;

        return connections.map((c, i) => (
          <Interconnection key={i} start={start.name} end={end.name} interconnection={c}/>
        ));
      },
      rejected() {
        return 'FAILED';
      },
    });
  }


  render() {
    const { start, end, p1, p2 } = this.state;

    return (
      <div>
        {this.renderSpotSelection()}

        <div>
          <Typography gutterBottom variant="headline" component="h2">
            地図
          </Typography>
          {this.renderMap()}
        </div>

        {/*<div>*/}
        {/*<Typography gutterBottom variant="headline" component="h2">*/}
        {/*(チェックイン)*/}
        {/*</Typography>*/}
        {/*</div>*/}


        <div>
          <Typography gutterBottom variant="headline" component="h2">
            経路
          </Typography>
          {this.renderRoute()}
        </div>
      </div>
    )
  }
}

export const JourneyWalk = connectStore(JourneyWalkView);

function Interconnection(props: { start: string, end: string, interconnection: RoutingWaypoints.Interconnection }) {
  const { start, end, interconnection } = props;

  const realStart = interconnection.fromWaypoint === 'start' ? start : interconnection.fromWaypoint;
  const realEnd = interconnection.toWaypoint === 'end' ? end : interconnection.toWaypoint;

  return (
    <div>
      <Typography gutterBottom component="h5">
        {realStart} - {realEnd}
      </Typography>
      <p>
        所要時間 {(interconnection.time / 60).toFixed(0)} 分
      </p>
    </div>
  );
}
