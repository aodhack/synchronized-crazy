import * as React from 'react';
import { StoreProps } from "./connect-store";
import { RouteComponentProps } from "react-router";

export abstract class BasePage<DirectProp = {}, S = never, UrlParam = never, MatchProp = never>
  extends React.Component<DirectProp & StoreProps & RouteComponentProps<MatchProp>, S> {

  // TODO: helper methods?




}
