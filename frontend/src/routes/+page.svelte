<script lang="ts">
    import Card from "./Card.svelte";
    import Sidebar from "./Sidebar.svelte";
    import { onMount } from "svelte";

    interface Drone {
        name: string;
        description: string;
        imageUrl: string;
        country: string;
        type: string;
    }

    let selectedDrone = $state<Drone | null>(null);
    let drones = $state(<Drone[]>[]);

    onMount(async () => {
        const response = await fetch("http://localhost:3000/drones");
        drones = await response.json();
    });
</script>

{#if selectedDrone}
    <Sidebar drone={selectedDrone} onClose={() => (selectedDrone = null)} />
{/if}

<div class="drone-catalog">
    {#each drones as drone, i (i)}
        <button
            class="card-wrapper"
            class:selected={selectedDrone?.name === drone.name}
            onclick={() =>
                (selectedDrone =
                    selectedDrone?.name === drone.name ? null : drone)}
        >
            <Card
                name={drone.name}
                description={drone.description}
                imageUrl={drone.imageUrl}
                country={drone.country}
                type={drone.type}
                selected={selectedDrone?.name === drone.name}
            />
        </button>
    {/each}
</div>

<style>
    .drone-catalog {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }

    .card-wrapper {
        all: unset;
        display: block;
        cursor: pointer;
    }
</style>
