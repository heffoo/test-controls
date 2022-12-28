import { createContext, useContext } from "react";
import CountriesStore from "./CountriesStore";

export const stores = createContext({
    countriesStore: new CountriesStore(),
  });

export const useStores = () => useContext(stores);