// UI
export interface LoaderState {
  visible: boolean;
}

// DATA
export interface SportsList {
  Antepost: number;
  Id: number;
  Name: string;
  NumQuote: number;
  NumSubevents: number;
  Order: number;
}

export interface GroupListEvent {
  Id: number;
  Name: string;
  Order: number;
  SportId: number;
  SportName: string;
  GroupId: number;
  GroupName: string;
  Antepost: number;
  NumSubevents: number;
  EventTypeId: number;
  GroupOrder: number;
}

export interface GroupList {
  Id: number;
  Name: string;
  Order: number;
  NumQuote: number;
  Sport: string;
  SportId: number;
  Antepost: number;
  Events: GroupListEvent[];
}

export interface TopEvents {
  Id: number;
  Order: number;
  Name: string;
  NumSubevents: number;
  SportId: number;
  SportName: string;
  GroupId: number;
  GroupName: string;
}

export interface Odds {
  Id: number;
  Value: number;
  Hnd: number;
  HndType: number;
  MarketId: number;
  SelectionId: number;
  Selection: string;
  PlayabilityId: number;
  IdClasseQuotaParamInstance: number;
  MarketParams: any[];
}

export interface Markets {
  Id: number;
  Name: string;
  Order: number;
  Odds: Odds[];
}

export interface Subevents {
  Id: number;
  Name: string;
  PublicationCode: number;
  StartTimeUtc: string; // date
  BetradarMatchId: number;
  BetradarMatchUid: string;
  NumQuote: number;
  EventId: number;
  EventTypeId: number;
  EventName: string;
  Markets: Markets[];
  SportName: string;
  GroupName: string;
  Participants: null | number;
  HasParticipants: boolean;
  NumberOfParticipants: number;
  SottoEventoTypeId: number;
}

export interface GroupSubevents {
  Id: number;
  Name: string;
  Order: number;
  SportId: number;
  SportName: string;
  GroupId: number;
  GroupName: string;
  Antepost: number;
  NumSubevents: number;
  EventTypeId: number;
  Playabilities: number[];
  Subevents: Subevents[];
  GroupOrder: number;
}

export interface GroupMarketsSingleMarket {
  Id: number;
  Name: string;
  Order: number;
  Odds: Odds[];
  IsNewMarket: boolean;
  ShortName: null | string;
  NumberOfParticipants: number;
  ParticipantOddsCount: number;
}

export interface GroupMarkets {
  Name: string;
  Id: number;
  Order: number;
  Markets: GroupMarketsSingleMarket[];
  HasParticipants: boolean;
  NumberOfParticipants: number;
  ParticipantOddsCount: number;
}

export interface EventQuotas {
  Id: number;
  Name: string;
  PublicationCode: number;
  StartTimeUtc: string; // date
  BetradarMatchId: number;
  BetradarMatchUid: string;
  NumQuote: number;
  EventId: number;
  EventTypeId: number;
  EventName: string;
  SportName: string;
  GroupName: string;
  Playabilities: number[];
  GroupedMarkets: GroupMarkets[];
  SottoEventoTypeId: number;
}
