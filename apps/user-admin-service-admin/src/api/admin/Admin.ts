import { JsonValue } from "type-fest";

export type Admin = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  statistics: JsonValue;
  name: string | null;
  email: string | null;
  password: string | null;
};
