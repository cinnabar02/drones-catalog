<script lang="ts">
    import Card from "./Card.svelte";
    import { onMount } from "svelte";

    interface Drone {
        name: string;
        description: string;
        imageUrl: string;
        country: string;
        type: string;
    }

    let drones = $state(<Drone[]>[]);

    onMount(async () => {
        const response = await fetch("http://localhost:3000/drones");
        drones = await response.json();
    });
</script>

<div class="drone-catalog">
    {#each drones as drone, i (i)}
        <Card
            name={drone.name}
            description={drone.description}
            imageUrl={drone.imageUrl}
            country={drone.country}
            type={drone.type}
        />
    {/each}
</div>

<style>
    .drone-catalog {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 10px;
    }
</style>
