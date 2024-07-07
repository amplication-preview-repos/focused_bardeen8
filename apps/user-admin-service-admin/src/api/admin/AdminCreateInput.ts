import { InputJsonValue } from "../../types";

export type AdminCreateInput = {
  statistics?: InputJsonValue;
  name?: string | null;
  email?: string | null;
  password?: string | null;
};
