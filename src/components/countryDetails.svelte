<script>
    export let countries;
</script>
<div class="flex justify-center text-center">
    <a href="{`/country/${countries.alpha3Code.toLowerCase()}`}" class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md items-center">
        <img src="{countries.flag}" alt="{countries.officialName}">
        <h2 class="text-1xl uppercase mt-5">{countries.officialName}</h2>
    </a>
</div>