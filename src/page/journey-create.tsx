import * as React from 'react';
import { BasePage } from "./base-page";
import { Button, Card, TextField, Typography } from "@material-ui/core";
import { connectStore } from "./connect-store";

interface State {
  traveller: string;
  startDate: string;
  endDate: string;
}

class CreateJourneyView extends BasePage {
  render() {
    return (
      <div className="journal-card-container">
        <Typography gutterBottom variant="headline" component="h2">
          旅の予定を登録する
        </Typography>

        <TextField
          label="旅人の名前"
          placeholder="通りかかる人"
          margin="normal"
        />

        <TextField
          label="出発地 経度"
          placeholder="経度"
          margin="normal"
        />

        <TextField
          label="出発地 緯度"
          placeholder="緯度"
          margin="normal"
        />

        <TextField
          label="目的地 経度"
          placeholder="経度"
          margin="normal"
        />

        <TextField
          label="目的地 緯度"
          placeholder="緯度"
          margin="normal"
        />

        <TextField
          label="メモ"
          placeholder="任意のメモ"
          multiline
          margin="normal"
        />

        <br/>
        <Button color="primary" variant='contained'>
          登録
        </Button>
        <Button color="secondary" variant='contained'>
          キャンセル
        </Button>

      </div>
    );
  }
}

export const CreateJourneyPage = connectStore(CreateJourneyView);
