import { User } from "./user";

export interface Device {
  id: number;
  active: boolean;
  device_id: string;
  device_name: string;
  last_update: Date;
  token: string;
  user?: User;
  current?: boolean;
}
