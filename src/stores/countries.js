import {writable} from "svelte/store";

export const countries = writable([]);

const fetchCountries = async () => {
    const url = 'https://restcountries.eu/rest/v2/all';
    const res = await fetch(url);
    const data = await res.json();

    const loadedCountries = data.map((data) => {
        return {
            name: data.name,
            alpha3Code: data.alpha3Code,
            nativeName: data.nativeName,
            flag: data.flag,
            topLevelDomain: data.topLevelDomain[0],
            alpha3Code: data.alpha3Code,
            callingCodes: data.callingCodes,
            capital: data.capital,
            region: data.region,
            population: data.population
        }
    });
    countries.set(loadedCountries);
};

fetchCountries();