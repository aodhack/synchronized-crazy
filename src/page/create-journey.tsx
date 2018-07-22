import * as React from 'react';
import { BasePage } from "./base-page";
import { Card } from "@material-ui/core";
import { connectStore } from "./connect-store";

class CreateJourneyView extends BasePage {
  render() {
    return (
      <Card className="journal-card-container">

      </Card>
    );
  }
}

export const CreateJourneyCode = connectStore(CreateJourneyView);
