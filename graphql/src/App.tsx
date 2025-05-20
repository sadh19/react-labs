import "./App.css";
import { gql, useQuery } from "@apollo/client";
import type { GetCountriesData } from "./models/types/Countries.ts";
import type { GetCountryData } from "./models/types/Country.ts";

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      emoji
      capital
    }
  }
`;

const GET_COUNTRY = gql`
  query getCountry($code: ID!) {
    country(code: $code) {
      code
      name
      native
      states {
        code
        name
      }
    }
  }
`;

function App() {
  const {
    data: countriesData,
    loading: countriesLoading,
    error: countriesError,
  } = useQuery<GetCountriesData>(GET_COUNTRIES);

  const {
    data: countryData,
    loading: countryLoading,
    error: countryError,
  } = useQuery<GetCountryData>(GET_COUNTRY, {
    variables: { code: "MX" },
  });

  if (countriesLoading && countryLoading) return <p>Cargando...</p>;
  if (countriesError) return <p>Error: {countriesError.message}</p>;
  if (countryError) return <p>Error: {countryError.message}</p>;

  return (
    <>
      <div>
        {countriesData &&
          countriesData.countries &&
          countriesData.countries.map((country) => (
            <>
              <div>
                <span>{country.code}</span>
                <span>{country.name}</span>
                <span>{country.capital}</span>
                <span>{country.emoji}</span>
              </div>
            </>
          ))}
      </div>

      <div>
        {countryData && countryData.country && (
          <>
            <div>
              <span>{countryData.country.code}</span>
              <span>{countryData.country.name}</span>
              <span>{countryData.country.native}</span>
              <div>
                {countryData.country.states.map((state) => (
                  <>
                    <div>
                      <span style={{ marginRight: "2rem" }}>{state.code}</span>
                      <span>{state.name}</span>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
