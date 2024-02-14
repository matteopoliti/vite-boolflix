<template>
    <main>

        <div>
            <h3 :class="(store.arrayFilm.length != 0) ? 'categoria' : 'd_none'">{{ store.searchPerformed ? 'Movies' :
                'Popular Movies' }}</h3>
            <div :class="(store.arrayFilm.length > store.arrayFilm.length - 1) ? 'row' : 'd_none'">
                <span v-if="(store.loading)" :class="(store.arrayFilm.length != 0) ? 'loader' : 'd_none'"></span>
                <MovieSeriesList v-for="(element, index) in store.arrayFilm" :key="index" :propsElement="element" />
            </div>

            <h3 :class="(store.arraySerieTv.length != 0) ? 'categoria' : 'd_none'">{{ store.searchPerformed ? 'Tv series' :
                'Popular tv series' }}</h3>
            <div :class="(store.arraySerieTv.length > store.arraySerieTv.length - 1) ? 'row' : 'd_none'">
                <span v-if="(store.arraySerieTv.length != 0)" :class="(store.search) ? 'loader' : 'd_none'"></span>
                <MovieSeriesList v-for="(element, index) in store.arraySerieTv" :key="index" :propsElement="element" />
            </div>

        </div>
    </main>
</template>

<script>
import { store } from '../../store';
import MovieSeriesList from "./MovieSeriesList.vue";
export default {
    name: "AppMain",
    components: {
        MovieSeriesList,
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
    min-height: 90vh;
    text-align: center;
    padding: 50px;
    padding-top: 130px;


    .categoria {
        color: #FFF;
        font-size: 34px;
        text-align: left;
        margin-block: 40px 20px;
    }

    .row {
        display: flex;
        gap: 10px;
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