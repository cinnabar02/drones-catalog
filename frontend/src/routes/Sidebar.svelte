<script lang="ts">
    import { fly } from "svelte/transition";
    import { marked } from "marked";

    let { drone, onClose } = $props();
    const html = $derived(marked.parse(drone.details));
</script>

<aside
    class="sidebar"
    in:fly={{ x: 300, duration: 250 }}
    out:fly={{ x: 300, duration: 200 }}
>
    <button onclick={onClose}><img src="/close.svg" alt="Close" /></button>

    <img src={drone.imageUrl} alt={drone.name} />
    <h2>{drone.name}</h2>
    <p>{@html html}</p>
</aside>

<style>
    .sidebar {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 100;
        width: min(500px, 100vw);
        height: 100vh;
        background: #e7e7e7;
        padding: 20px;
        box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
        overflow-y: auto;
    }

    .sidebar button img {
        width: 25px;
        height: 25px;
    }

    .sidebar button {
        all: unset;
        cursor: pointer;
        position: sticky;
        top: 0px;
        transform: translateX(-2px);
        transform: translateY(-5px);
    }

    .sidebar h1 {
        font-family: "courier new", monospace;
        font-size: 1.8rem;
        margin-bottom: 10px;
    }

    .sidebar h2 {
        font-family: "courier new", monospace;
        font-size: 1.5rem;
        margin-top: 20px;
        margin-bottom: 8px;
    }

    .sidebar p {
        font-family: "courier new", monospace;
        font-size: 1rem;
        line-height: 1.6;
        padding-bottom: 30px;
    }

    .sidebar ul {
        font-family: "courier new", monospace;
        padding-left: 20px;
        line-height: 1.8;
    }

    .sidebar hr {
        border: none;
        border-top: 1px solid #c0bfbf;
        margin: 15px 0;
    }

    .sidebar img {
        width: 100%;
        height: auto;
        border-radius: 5px;
        margin-bottom: 10px;
    }
</style>
