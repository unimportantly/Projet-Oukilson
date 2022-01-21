export class Event {
  id!: number;
  userId!: number;
  gameId!: number;
  eventTitle!: string;
  description!: string;
  startDate!: Date;
  endDate!: Date;
  limitDate!: Date;
  minPlayer!: number;
  maxPlayer!: number;
  location!: string;
}
