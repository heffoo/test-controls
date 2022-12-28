import { makeAutoObservable } from "mobx";
import { CountryInfo, getCountryByName } from "../api/apiService";

class CountriesStore {
  countries: CountryInfo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getCountries = async (value: string) => {
    await getCountryByName(value)
      .then((countries) => {
        this.countries = countries;
      })
  };
}

export default CountriesStore;
