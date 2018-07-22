import * as React from 'react';

import { BasePage } from "./base-page";
import { connectStore } from "./connect-store";
import { TaipeiStation } from "../const";
import { TaipeiSpots } from "../external/external";
import { Spot } from "../types";
import { Avatar, Checkbox, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from "@material-ui/core";
import { CrosshairsGpsIcon, PinIcon, WifiIcon } from "mdi-react";

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
              <ListItemSecondaryAction>
                <Checkbox
                  checked
                />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <Avatar>
                <PinIcon/>
              </Avatar>
              <ListItemText
                primary="SPOT"
                secondary="経由"
              />
              <ListItemSecondaryAction>
                <Checkbox
                  checked
                />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <Avatar>
                <WifiIcon/>
              </Avatar>
              <ListItemText
                primary="WIFIがあるところ"
                secondary="経由"
              />
              <ListItemSecondaryAction>
                <Checkbox checked={false}/>
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
              <ListItemSecondaryAction>
                <Checkbox checked={false}/>
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <List className="journey-spot-list">

          </List>

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
