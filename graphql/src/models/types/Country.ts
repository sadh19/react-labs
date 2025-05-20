import type { State } from "./State.ts";

export type Country = {
  code: string;
  name: string;
  native: string;
  phone: string;
  states: State[];
};

export type GetCountryData = {
  country: Country;
};
