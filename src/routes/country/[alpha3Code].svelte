<script context="module">
    export async function load({page}) {
        const alpha3Code = page.params.alpha3Code;
        const url = `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`;
        const res = await fetch(url);
        const country = await res.json();

        return {props: {country}};
    }
</script>

<script>
    export let country;
</script>

<svelte:head>
    <title>Svelte Country App - {country.name}</title>
</svelte:head>

<div class="my-10 flex justify-center">
    <div class="grid grid-cols-1">
        <img src="{country.flag}" alt="{country.name}" class="w-52">
        <h2 class="text-1xl uppercase mt-5 text-center mb-5">{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <hr>
        <p>Region: {country.region}</p>
        <hr>
        <p>Native name: {country.nativeName}</p>
        <hr>
        <p>TLD: *{country.topLevelDomain}</p>
        <hr>
        <p>Calling code: +{country.callingCodes}</p>
        <hr>
        <p>Population: {country.population}</p>
    </div>
</div>

<div class="flex justify-center">
    <a href="/" class="bg-gray-500 border-gray-800 text-gray-100 p-2 rounded-md">Back to home</a>
</div>