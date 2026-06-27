<script lang="ts">
    import Card from "./Card.svelte";
    import Sidebar from "./Sidebar.svelte";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    interface Drone {
        id: number;
        name: string;
        description: string;
        imageUrl: string;
        country: string;
        type: string;
    }

    let selectedDrone = $state<Drone | null>(null);
    let drones = $state(<Drone[]>[]);

    onMount(async () => {
        const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";
        const response = await fetch(`${API_URL}/drones`);
        drones = await response.json();
    });
</script>

<div class="layout">
    {#if selectedDrone}
        <Sidebar drone={selectedDrone} onClose={() => (selectedDrone = null)} />
        <button
            class="overlay"
            aria-label="Close sidebar"
            onclick={() => (selectedDrone = null)}
        ></button>
    {/if}

    <div class="drone-catalog">
        {#each drones as drone, i (i)}
            <button
                in:fly={{ x: 30, duration: 350, delay: i * 80 }}
                class="card-wrapper"
                class:selected={selectedDrone?.id === drone.id}
                onclick={() =>
                    (selectedDrone =
                        selectedDrone?.id === drone.id ? null : drone)}
            >
                <Card
                    name={drone.name}
                    description={drone.description}
                    imageUrl={drone.imageUrl}
                    country={drone.country}
                    type={drone.type}
                    selected={selectedDrone?.id === drone.id}
                />
            </button>
        {/each}
    </div>
</div>

<style>
    .layout {
        display: flex;
        flex-direction: row-reverse;
        gap: 20px;
    }

    .drone-catalog {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 20px;
        flex: 1;
        transition: all 0.25s ease-out;
    }

    .card-wrapper {
        all: unset;
        display: block;
        cursor: pointer;
    }

    .overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 99;
    }
</style>
