import { InputJsonValue } from "../../types";

export type AdminUpdateInput = {
  statistics?: InputJsonValue;
  name?: string | null;
  email?: string | null;
  password?: string | null;
};
