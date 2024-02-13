<template>
    <main>
        <span v-if="(store.loading)" class="loader"></span>

        <div :class="(store.arrayFilm.length > store.arrayFilm.length - 1) ? 'row' : 'd_none'">
            <MovieList v-for="(element, index) in store.arrayFilm" :key="index" :propsElement="element" />

        </div>
    </main>
</template>

<script>
import { store } from '../../store';
import MovieList from "./MovieList.vue"
export default {
    name: "AppMain",
    components: {
        MovieList
    },
    data() {

        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

main {
    background-color: black;
    min-height: 90vh;
    text-align: center;
    padding: 50px;

    .row {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

    .d_none {
        display: none;
    }

    .loader {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: block;
        margin: 15px auto;
        position: relative;
        background: #FFF;
        box-shadow: -24px 0 #FFF, 24px 0 #FFF;
        box-sizing: border-box;
        animation: shadowPulse 2s linear infinite;
    }

    @keyframes shadowPulse {
        33% {
            background: #FFF;
            box-shadow: -24px 0 $netflixColor, 24px 0 #FFF;
        }

        66% {
            background: $netflixColor;
            box-shadow: -24px 0 #FFF, 24px 0 #FFF;
        }

        100% {
            background: #FFF;
            box-shadow: -24px 0 #FFF, 24px 0 $netflixColor;
        }
    }
}
</style>