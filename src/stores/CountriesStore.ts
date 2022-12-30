import { makeAutoObservable } from "mobx";
import { CountryInfo, getCountriesByName } from "../apiService/getCountriesByName";

class CountriesStore {
  countries: CountryInfo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getCountries = async (value: string) => {
    await getCountriesByName(value)
      .then((countries) => {
        this.countries = countries;
      })
  };
}

export default CountriesStore;
