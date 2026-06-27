<script lang="ts">
    import { fly } from "svelte/transition";

    let { drone, onClose } = $props();
</script>

<aside
    class="sidebar"
    in:fly={{ x: 300, duration: 250 }}
    out:fly={{ x: 300, duration: 200 }}
>
    <button onclick={onClose}><img src="/close.svg" alt="Close" /></button>

    <img src={drone.imageUrl} alt={drone.name} />
    <h2>{drone.name}</h2>
    <p>{@html drone.details}</p>
</aside>

<style>
    .sidebar {
        position: fixed;
        right: 0;
        top: 0;
        width: 500px;
        height: 100vh;
        background: #e7e7e7;
        padding: 20px;
        box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
    }

    .sidebar button img {
        width: 25px;
        height: 25px;
    }

    .sidebar button {
        all: unset;
        cursor: pointer;
        transform: translateX(-2px);
        transform: translateY(-5px);
    }

    .sidebar h2 {
        font-family: "courier new", monospace;
        padding: 5px;
        font-size: 1.5rem;
        margin-top: 0;
        margin-bottom: 0;
    }

    .sidebar p {
        font-family: "courier new", monospace;
        padding: 5px;
        font-size: 1rem;
        margin-top: 0;
        margin-bottom: 0;
    }

    .sidebar img {
        width: 100%;
        height: auto;
        border-radius: 5px;
        margin-bottom: 10px;
    }
</style>
