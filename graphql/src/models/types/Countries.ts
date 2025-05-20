export type Countries = {
  code: string;
  name: string;
  emoji: string;
  capital: string;
};

export type GetCountriesData = {
  countries: Countries[];
};
