export interface IEvent {
  type: string;
  eventName: string;
  eventTarget: string;
  eventParams: {
    title: string;
  };
}
