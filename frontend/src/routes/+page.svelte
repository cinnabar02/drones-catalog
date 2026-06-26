<script lang="ts">
    import Card from "./Card.svelte";

    const Drones = [
        {
            name: "Герань-2",
            description:
                "Российский дрон-камикадзе на базе иранского Shahed-136, летит по GPS-координатам с характерным звуком поршневого мотора, используется для ударов по инфраструктуре.",
            imageUrl:
                "https://topwar.ru/uploads/posts/2026-03/c078496179_maxresdefault-1.webp",
            country: "ru",
            type: "Барражирующий боеприпас",
        },
        {
            name: "Hornet",
            description:
                "Американский ударный БПЛА с ИИ-наведением от Swift Beat LLC, дальность до 150 км, устойчив к РЭБ, применяется Украиной с 2025 года для уничтожения российской логистики в глубоком тылу.",
            imageUrl:
                "https://www.bragazeta.ru/wp-content/uploads/2026/04/ChatGPT-Image-25-apr.-2026-g.-21_31_36-crop-1024x640.webp",
            country: "uk",
            type: "Барражирующий боеприпас",
        },
        {
            name: "Parrot Anafi",
            description:
                "A lightweight drone with a 4K HDR camera and unique zoom capabilities.",
            imageUrl:
                "https://avatars.mds.yandex.net/get-mpic/4012413/img_id2798447591096154692.jpeg/orig",
            country: "ru",
            type: "Барражирующий боеприпас",
        },
        {
            name: "DJI Mavic Air 2",
            description:
                "A compact and powerful drone with a 48MP camera and 4K video capabilities.",
            imageUrl: "https://img.mvideo.ru/Big/10024260bb.jpg",
            country: "ru",
            type: "Барражирующий боеприпас",
        },
        {
            name: "Autel Robotics EVO II",
            description:
                "A versatile drone with an 8K camera and long flight time.",
            imageUrl:
                "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-68/083/388/772/419/33/600012903740b1.jpeg",
            country: "ru",
            type: "Барражирующий боеприпас",
        },
        {
            name: "Parrot Anafi",
            description:
                "A lightweight drone with a 4K HDR camera and unique zoom capabilities.",
            imageUrl:
                "https://rc-today.ru/UserFiles/Image/77/90/kvadrokopter_s_teplovizorom_autel_evo_ii_dual_enterprise_rugged_bundle_640t_au_eiid640_ent_rb_au_eiid640_ent_rb_6328468e36665_5481_big.jpg",
            country: "ru",
            type: "Барражирующий боеприпас",
        },
    ];
</script>

<div class="drone-catalog">
    {#each Drones as drone, i (i)}
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
