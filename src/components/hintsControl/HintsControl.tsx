import React, { useCallback, useEffect, useState } from "react";
import { CountryInfo } from "../../api/apiService";
import styled from "styled-components";
import Input from "../Input";
import { observer } from "mobx-react-lite";
import { useStores } from "../../stores";

type HintsControlProps = {
  hints?: number;
};

const HintControl = observer(({ hints }: HintsControlProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [countries, setCountries] = useState<CountryInfo[]>([]);

  const { countriesStore } = useStores();

  const getCountries = useCallback(
    (country: string) => {
      countriesStore.getCountries(country).then(() => {
        const renderCountries = hints
          ? countriesStore.countries.splice(0, hints)
          : countriesStore.countries;
        setCountries(renderCountries);
      });
    },
    [countriesStore, hints]
  );

  useEffect(() => {
    getCountries(searchValue);
  }, [getCountries, searchValue]);

  return (
    <HintsControlWrapper>
      <StyledInput
        placeholder="Введите значение..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <CountryList>
        {countries.map((country) => {
          return (
            <CountryItem key={country.name}>
              <CountryItemContent>
                <CountryItemHeader>{country.name}</CountryItemHeader>
                <CountryFullName>{country.fullName}</CountryFullName>
              </CountryItemContent>
              <CountryItemFlag alt="flag" src={country.flag} />
            </CountryItem>
          );
        })}
      </CountryList>
    </HintsControlWrapper>
  );
});

const HintsControlWrapper = styled.div``;

const StyledInput = styled(Input)``;

const CountryList = styled.ul`
  position: relative;
  width: 500px;
  margin: 0 20px;
  padding: 0;
`;

const CountryItemHeader = styled.h4`
  margin: 0;
  padding: 0;
`;

const CountryItem = styled.li`
  list-style-type: none;
  border: 0.5px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  position: relative;
`;

const CountryFullName = styled.p`
  padding: 0;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const CountryItemContent = styled.span`
  justify-content: space-between;
  flex-direction: column;
  width: 450px;
`;

const CountryItemFlag = styled.img`
  width: 40px;
  height: 30px;
`;

export default HintControl;
