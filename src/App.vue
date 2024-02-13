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

            if (store.searchText != "") {
                store.apiUrlMovie += `${store.searchText}`
            }
            axios
                .get(store.apiUrlMovie)
                .then(response => {
                    store.arrayFilm = response.data.results
                    console.log(store.arrayFilm)
                    store.loading = false

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