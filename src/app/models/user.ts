export interface User {
  id: number;
  username: string;
  email: string;
  description: string;
  birthday: Date;
  gender: string;
  orientation: string;
  pronoun: string;
  relationship: string;
  status: string;
  latitude: number;
  longitude: number;

  password?: string;
  token?: string;
}
