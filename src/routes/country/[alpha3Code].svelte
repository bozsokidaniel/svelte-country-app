<script context="module">
    export async function load({page}) {
        const alpha3Code = page.params.alpha3Code.toLowerCase();
        const url = `https://restcountries.com/v3.1/alpha?codes=${alpha3Code}`;
        const res = await fetch(url);
        const country = await res.json();

        return {
            props: {
                country: country[0]
            }
        };
    }
</script>

<script>
    export let country;
</script>

<svelte:head>
    <title>Svelte Country App - {country.name.official}</title>
</svelte:head>

<div class="my-10 flex justify-center">
    <div class="grid grid-cols-1">
        <div class="mx-auto	">
            <img src="{country.flags.png}" alt="{country.name.official}" class="w-52">
        </div>
        <h2 class="text-1xl uppercase mt-5 text-center mb-5">{country.name.official}</h2>
        <p>Capital: {country.capital}</p>
        <hr>
        <p>Region: {country.region}</p>
        <hr>
        <p>Area: {country.area} m²</p>
        <hr>
        <p>TLD: *{country.tld[0]}</p>
        <hr>
        <p>Population: {country.population}</p>
        <hr>
        <p>Map: <a href="{country.maps.googleMaps}" target="_blank">{country.maps.googleMaps}</a></p>
    </div>
</div>

<div class="flex justify-center">
    <a href="/" class="bg-gray-500 border-gray-800 text-gray-100 p-2 rounded-md">Back to home</a>
</div>