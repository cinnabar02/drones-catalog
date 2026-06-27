<script lang="ts">
    type Props = {
        name: string;
        description: string;
        imageUrl: string;
        country: string;
        type: string;
    };

    const { name, description, imageUrl, country, type, selected } = $props();
</script>

<div class="card" class:selected>
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
        width: 100%;
        height: 400px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
    }

    .card-content h3 {
        font-family: "courier new", monospace;
        padding: 5px;
        font-size: 1.5rem;
        margin: 0 5px;
    }

    .card-content p {
        font-family: "courier new", monospace;
        padding: 5px;
        font-size: 1rem;
        margin: 0 5px;
    }

    .card img {
        width: 100%;
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
        font-size: 0.95rem;
        margin: auto 0 5px 5px;
    }

    .card:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    }

    .card.selected {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
        transition:
            transform 0.25s ease-out,
            box-shadow 0.25s ease-out;
    }
</style>
