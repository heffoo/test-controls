import { makeAutoObservable } from "mobx";
import {
  CountryInfo,
  getCountriesByName,
} from "../apiService/getCountriesByName";

class CountriesStore {
  countries: CountryInfo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getCountries = async (value: string) => {
    this.countries = await getCountriesByName(value);
  };
}

export default CountriesStore;
