<template>
    <main>

        <div>
            <h3 :class="(store.arrayFilm.length != 0) ? 'categoria' : 'd_none'">{{ store.searchPerformed ? 'Movies' :
                'Popular Movies' }}</h3>
            <div :class="(store.arrayFilm.length > store.arrayFilm.length - 1) ? 'row' : 'd_none'">
                <span v-if="(store.loading)" :class="(store.arrayFilm.length != 0) ? 'loader' : 'd_none'"></span>
                <MovieSeriesList v-for="(element, index) in store.arrayFilm" :key="index" :propsElement="element"
                    @performVideo="openVideo" />
            </div>

            <h3 :class="(store.arraySerieTv.length != 0) ? 'categoria' : 'd_none'">{{ store.searchPerformed ? 'Tv series' :
                'Popular tv series' }}</h3>
            <div :class="(store.arraySerieTv.length > store.arraySerieTv.length - 1) ? 'row' : 'd_none'">
                <span v-if="(store.arraySerieTv.length != 0)" :class="(store.search) ? 'loader' : 'd_none'"></span>
                <MovieSeriesList v-for="(element, index) in store.arraySerieTv" :key="index" :propsElement="element"
                    @performVideo="openVideo" />
            </div>


            <div class="trailer " :class="{ active: store.isActive }">
                <iframe id="youtube-video" :src="videoUrl" frameborder="0" allow="autoplay"></iframe>
                <i class="fa-solid fa-xmark" :class="{ active: store.isActive }" @click="closeVideo"></i>
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
    },
    computed: {
        videoUrl() {
            let videoKey;
            if (store.mediaType === 'movie') {
                videoKey = store.movieVideoKey;
            } else {
                videoKey = store.seriesVideoKey;
            }
            return `https://www.youtube.com/embed/${videoKey}?enablejsapi=1`;
        }
    },
    methods: {
        openVideo() {
            store.isActive = false;
        },
        closeVideo() {
            store.isActive = true;
            let iframe = document.getElementById('youtube-video');
            iframe.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
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

    .trailer {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(0, 0, 0, 0.9);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        iframe {
            position: relative;
            width: 1400px;
            height: 800px;
            outline: none;

        }

        .fa-xmark {
            position: absolute;
            top: 150px;
            right: 60px;
            font-size: 50px;
            color: white;
            cursor: pointer;
        }
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