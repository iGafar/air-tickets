export interface IOtions {
  [key: string]: boolean;
}

export interface IItem {
  value: string;
  label: string;
}

export interface ITicketTime {
  startTime: string;
  endTime: string;
}

export interface ITicket {
  id: number;
  from: string;
  to: string;
  company: string;
  price: number;
  currency: "RUB";
  time: ITicketTime;
  duration: number;
  date: string;
  connectionAmount: number | null;
}
