<script>
    import {countries} from "../stores/countries";
    import CountryDetails from "../components/countryDetails.svelte";

    let searchTerm = "";
    let filteredCountries = [];

    $: {
        if(searchTerm){
            filteredCountries = $countries.filter(countries => countries.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
        }
        else{
            filteredCountries = [ ...$countries];
        }
    }
</script>

<svelte:head>
    <title>Svelte Country App - Home</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Country App</h1>

<div class="container mx-auto px-4">
    <input type="text" bind:value="{searchTerm}" class="w-full rounded-md text-lg p-4 border-2 border-gray-200 mb-5" placeholder="Search country">
    {#if filteredCountries.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each filteredCountries as country}
                <CountryDetails countries={country} />
            {/each}
        </div>
    {:else}
        <div class="w-full">
            <h2 class="text-1xl uppercase text-center py-10 text-gray-800 bg-gray-100 rounded-md shadow-sm">No search results</h2>
        </div>
    {/if}
</div>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>