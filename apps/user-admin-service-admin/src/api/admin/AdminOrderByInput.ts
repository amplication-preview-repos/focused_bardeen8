import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  statistics?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
};
