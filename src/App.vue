<script>
import AppHeader from "./components/header/AppHeader.vue"
import AppMain from "./components/main/AppMain.vue"

import axios from "axios";
import { store } from "./store";

export default {
    components: {
        AppHeader,
        AppMain
    },
    data() {
        return {
            store,
        };
    },
    mounted() {

    },
    methods: {
        getMovie() {
            store.arrayFilm = [];

            store.loading = true


            if (store.searchText) {

                axios
                    .get(`${store.apiUrlMovie}?api_key=${store.apiKey}&query=${store.searchText}`)
                    .then(response => {
                        store.arrayFilm = response.data.results
                        store.loading = false

                    })

            }
        },
        getSeries() {
            store.arraySerieTv = []

            store.loading = true

            if (store.searchText) {
                axios
                    .get(`${store.apiUrlTv}?api_key=${store.apiKey}&query=${store.searchText}`)
                    .then(response => {
                        store.arraySerieTv = response.data.results
                        store.loading = false
                        console.log(store.arraySerieTv)
                    })
            }
        },
        getMulti() {
            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/search/multi?api_key=${store.apiKey}`,
                params: { include_adult: 'false', language: 'en-US', page: '1' },
                headers: { accept: 'application/json' }
            };

            axios
                .request(options)
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        search() {
            this.getMovie();
            this.getSeries();
            this.getMulti();
        }

    },
}
</script>

<template>
    <AppHeader @performSearch="search" />
    <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>