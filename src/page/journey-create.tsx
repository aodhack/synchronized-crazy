import * as React from 'react';
import * as _ from 'lodash';

import { BasePage } from "./base-page";
import { Button, Card, MenuItem, TextField, Typography } from "@material-ui/core";
import { connectStore } from "./connect-store";
import { ChangeEvent } from "react";
import { TravelPlan } from "../types";
import { TaipeiStation } from "../const";

type State = TravelPlan;

class CreateJourneyView extends BasePage<{}, State> {

  state: State = {
    traveller: '',
    startDate: '',
    endDate: '',
    start: TaipeiStation,
    dest: TaipeiStation,
    memo: '',
  }

  setValue = (field: keyof State) => (ev: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [field]: ev.target.value } as any);
  }

  get allFieldPresent() {
    const s = this.state;
    return _.every([
      s.traveller,
    ], v => v);
  }

  render() {
    const s = this.state;

    return (
      <div className="journal-card-container">
        <Typography gutterBottom variant="headline" component="h2">
          旅の予定を登録する
        </Typography>

        <TextField
          label="旅人の名前"
          placeholder="通りかかる人"
          margin="normal"

          value={s.traveller}
          onChange={this.setValue('traveller')}
        />

        <TextField
          label="出発日付"
          placeholder="日付"
          margin="normal"

          value={s.startDate}
          onChange={this.setValue('startDate')}
        />

        <TextField
          label="到着日付"
          placeholder="日付"
          margin="normal"

          value={s.endDate}
          onChange={this.setValue('endDate')}
        />

        <br/>

        <TextField
          select
          label="出発地"
          value={s.start.name}
          margin="normal"
        >
          <MenuItem value={TaipeiStation.name}>
            {TaipeiStation.name}
          </MenuItem>
        </TextField>

        <TextField
          select
          label="目的地"
          value={s.start.name}
          margin="normal"
        >
          <MenuItem value={TaipeiStation.name}>
            {TaipeiStation.name}
          </MenuItem>
        </TextField>
        <br/>

        <TextField
          label="メモ"
          placeholder="任意のメモ"
          multiline
          margin="normal"

          value={s.memo}
          onChange={this.setValue('memo')}
        />

        <br/>
        <Button color="primary" variant='contained' disabled={!this.allFieldPresent} onClick={this.nav.gotoMyPage}>
          登録
        </Button>
        <Button color="secondary" variant='contained' onClick={this.nav.gotoMyPage}>
          キャンセル
        </Button>

      </div>
    );
  }
}

export const CreateJourneyPage = connectStore(CreateJourneyView);
