import * as React from 'react';

import { BasePage } from "./base-page";
import { connectStore } from "./connect-store";
import { JourneyCard } from "../component/journey-card";

class DiscoverView extends BasePage {
  render() {
    return (
      <div>
        他の人の旅を応援しよう!
        <JourneyCard />
        <JourneyCard />
      </div>
    );
  }
}

export const DiscoverPage = connectStore(DiscoverView);
