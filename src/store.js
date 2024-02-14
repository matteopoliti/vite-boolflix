import { reactive } from "vue";

export const store = reactive({
    searchText: "",
    loading: true,
    arrayFilm: [],
    arraySerieTv: [],
    apiUrlMovie: "https://api.themoviedb.org/3/search/movie",
    apiUrlTv: "https://api.themoviedb.org/3/search/tv",
    apiKey: "cddc39791350ea40e48f19a67d953972",
    searchPerformed: false

});