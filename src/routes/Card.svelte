<script lang="ts">
    type Props = {
        name: string;
        description: string;
        imageUrl: string;
        country: string;
        type: string;
    };

    const { name, description, imageUrl, country, type } = $props();
</script>

<div class="card">
    <img src={imageUrl} alt={name} />

    <div class="card-content">
        {#if country === "ru"}
            <h3>{name} <img src="/flag-ru.svg" alt="Russia" /></h3>
        {:else}
            <h3>{name} <img src="/flag-uk.svg" alt="Ukraine" /></h3>
        {/if}

        <p>{description}</p>
    </div>

    <span class="drone-type">{type}</span>
</div>

<style>
    .card {
        border: 1px solid #c0bfbf;
        border-radius: 12px;
        overflow: hidden;
        width: 350px;
        height: 400px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
    }

    .card-content h3 {
        font-family: "courier new", monospace;
        padding: 5px;
        font-size: 1.5rem;
        margin-top: 0;
        margin-bottom: 0;
    }

    .card-content p {
        font-family: "courier new", monospace;
        padding: 5px;
        font-size: 1rem;
        margin-top: 0;
        margin-bottom: 0;
    }

    .card img {
        width: 350px;
        height: 200px;
        object-position: center;
        object-fit: cover;
    }

    .card-content img {
        vertical-align: text-middle;
        width: 26px;
        height: 15px;
        border-radius: 3px;
        border: 2px solid #1a1a1a;
    }

    .drone-type {
        color: #f5592a;
        font-family: "courier new", monospace;
        padding: 5px;
        font-size: 0.85rem;
        margin-top: auto;
        margin-bottom: 5px;
    }
</style>
