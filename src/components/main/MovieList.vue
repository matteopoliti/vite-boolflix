<template>
    <div class="col">
        <div class="info">
            <p>{{ propsElement.title }}</p>
            <span>{{ propsElement.original_title }}</span>
            <span>{{ propsElement.original_language }}</span>
            <span>{{ propsElement.vote_average }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "MovieList",
    props: [
        "propsElement"
    ],
    data() {

        return {}
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;

.col {
    width: calc(100% / 5 - 20px + (20px / 5));

    .info {
        padding: 20px;
        min-height: 150px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        p {
            color: #fff;
            text-transform: uppercase;
            font-size: 20px;
            font-weight: bold;
        }

        span {
            text-transform: capitalize;
            font-size: 20px;
            color: #fff;
        }
    }
}
</style>