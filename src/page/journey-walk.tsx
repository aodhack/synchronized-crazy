import * as React from 'react';

import { BasePage } from "./base-page";
import { connectStore } from "./connect-store";
import { TaipeiStation } from "../const";
import { TaipeiSpots } from "../external/external";
import { Spot } from "../types";
import { List, Typography } from "@material-ui/core";

class RouteModel {

}

interface State {
  route: Spot[];

}

class JourneyWalkView extends BasePage {

  dummyData = {
    start: TaipeiStation,
    end: TaipeiStation,
    spots: TaipeiSpots,
    wifiSpots: [] as Spot[],
  }

  render() {
    return (
      <div className="journey-walk">
        <div>
          <Typography gutterBottom variant="headline" component="h2">
            旅の予定を登録する
          </Typography>

          <List className="journey-spot-selected">

          </List>

          <List className="journey-spot-list">

          </List>
        </div>
        <div>
          <Typography gutterBottom variant="headline" component="h2">
            (地図)
          </Typography>
        </div>

        <div>
          <Typography gutterBottom variant="headline" component="h2">
            (チェックイン)
          </Typography>
        </div>
      </div>
    )
  }

}

export const JourneyWalk = connectStore(JourneyWalkView);
