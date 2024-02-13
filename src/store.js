import { reactive } from "vue";

export const store = reactive({
    searchText: "",
    loading: true,
    arrayFilm: [],
    apiUrlMovie: "https://api.themoviedb.org/3/search/movie?api_key=cddc39791350ea40e48f19a67d953972&query=",
    apiUrlTv: "https://api.themoviedb.org/3/search/tv?api_key=cddc39791350ea40e48f19a67d953972&query="
});