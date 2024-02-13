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
        this.getMovie()
    },
    methods: {
        getMovie() {
            store.loading = true

            store.apiUrlMovie = "https://api.themoviedb.org/3/search/movie?api_key=cddc39791350ea40e48f19a67d953972&query="

            store.apiUrlTv = "https://api.themoviedb.org/3/search/tv?api_key=cddc39791350ea40e48f19a67d953972&query="

            if (store.searchText != "") {
                store.apiUrlMovie += `${store.searchText}`
                store.apiUrlTv += `${store.searchText}`
            }
            axios
                .get(store.apiUrlMovie)
                .then(response => {
                    store.arrayFilm = response.data.results
                    store.loading = false

                })
            axios
                .get(store.apiUrlTv)
                .then(response => {
                    store.arrayFilm = store.arrayFilm.concat(response.data.results)
                    store.loading = false
                    console.log(store.arrayFilm)
                })
        }
    },
}
</script>

<template>
    <AppHeader @performSearch="getMovie" />
    <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>