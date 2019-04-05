import { User } from "./user";

export interface Device {
  device_id: string;
  device_name: string;
  id?: number;
  active?: boolean;
  last_update?: Date;
  token?: string;
  current?: boolean;
}
