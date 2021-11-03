import {writable} from "svelte/store";

export const countries = writable([]);

const fetchCountries = async () => {
    const url = 'https://restcountries.com/v3.1/all';
    const res = await fetch(url);
    const data = await res.json();

    const loadedCountries = data.map((data) => {
        return {
            officialName: data.name.official,
            topLevelDomain: data.tld,
            alpha3Code: data.cca3,
            capital: data.capital,
            region: data.region,
            area: data.area,
            flag: data.flags.svg,
            population: data.population,
        }
    });
    countries.set(loadedCountries);
};

fetchCountries();