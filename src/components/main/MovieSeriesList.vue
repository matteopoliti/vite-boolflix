<template>
    <div class="col">

        <div>
            <figure>
                <img v-if="(propsElement.poster_path === null)" src="../../assets/img/anteprima-non-disponibile.jpg"
                    :alt="propsElement.title">
                <img v-else :src="'http://image.tmdb.org/t/p/w342' + propsElement.poster_path" :alt="propsElement.title">
            </figure>

            <div class="info">
                <h5> {{ propsElement.title ? propsElement.title : propsElement.name }}</h5>

                <span>Original title: {{ propsElement.original_title ? propsElement.original_title :
                    propsElement.original_name }}</span>
                <div class="lingua">
                    <span>Original language: </span>
                    <img :src="'https://flagcdn.com/w20/' + getCountryCode(propsElement.original_language) + '.png'"
                        :alt="propsElement.original_language" width="20">
                </div>
                <div class="vote">
                    <span>Vote: </span>
                    <ul>
                        <li v-for="(item, index) in 5" :key="index">
                            <i class="fa-star"
                                :class="(item <= Math.ceil(propsElement.vote_average / 2) ? 'fas' : 'far')"></i>
                        </li>
                    </ul>
                </div>
                <div class="overview">
                    <p>Overview: {{ propsElement.overview }}</p>
                </div>


                <button @click="handleClick">
                    <i class="fab fa-youtube"></i>
                    Play trailer on YouTube
                </button>


            </div>

        </div>

    </div>
</template>

<script>
import { store } from '../../store';
import axios from "axios";

export default {
    name: "MovieSeriesList",
    props: [
        "propsElement"
    ],
    data() {

        return {
            languageToCountryCode: {
                'ja': 'jp',
                'en': 'gb-eng',
                'ko': 'kr',
                'zh': 'hk',
                'hi': 'in',
                'da': 'dk'

            },


        }
    },
    methods: {
        getCountryCode(languageCode) {
            return this.languageToCountryCode[languageCode] || languageCode;
        },

        getStar(vote) {
            return this.voteToStar[vote];
        },
        getId() {
            store.apiId = this.propsElement.id;
            if (this.propsElement.hasOwnProperty('title')) {
                this.getMovieVideos();
            } else {
                this.getSeriesVideo();
            }

        },
        getMovieVideos() {

            if (store.apiId) {
                const options = {
                    method: 'GET',
                    url: `https://api.themoviedb.org/3/movie/${store.apiId}/videos?api_key=${store.apiKey}`,
                    params: { language: 'en-US' },
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer cddc39791350ea40e48f19a67d953972'
                    }
                };

                axios
                    .request(options)
                    .then(function (response) {
                        let trailers = response.data.results.filter(video => video.name.toLowerCase().includes('official'));
                        if (trailers.length > 0) {
                            store.movieVideoKey = trailers[0].key;
                        }
                        console.log(response.data.results);
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            }
        },
        getSeriesVideo() {

            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/tv/${store.apiId}/videos?api_key=${store.apiKey}`,
                params: { language: 'en-US' },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGRjMzk3OTEzNTBlYTQwZTQ4ZjE5YTY3ZDk1Mzk3MiIsInN1YiI6IjY1Y2IzYTgyMWMwOWZiMDE4MjM4NzZjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kww6Yls0TPkWqOTCKzjrMyqD9gvJ-nc_yTQOor7YdWI'
                }
            };

            axios
                .request(options)
                .then(function (response) {
                    store.videoKey = "series"
                    store.seriesVideoKey = response.data.results[0].key;
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        handleClick() {
            this.getId();

            this.$emit('performVideo')
        }

    }

}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;

.col {
    width: calc(100% / 6 - 10px + (10px / 6));

    >div {
        position: relative;


        &:hover .info {
            opacity: 1;
        }

        &:hover figure {
            opacity: 0.1;
        }

        figure {
            display: inline-block;
        }



        .info {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 10px;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            width: 80%;

            h5 {
                color: $netflixColor;
                text-transform: uppercase;
                font-size: 26px;
            }

            .lingua {
                display: flex;
                align-items: center;
                gap: 5px;

                img {
                    width: 30px;
                    height: 15px;
                }
            }


            span {
                font-size: 16px;
                color: #fff;

            }

            .vote {
                display: flex;
                gap: 5px;

                ul {
                    display: flex;
                    list-style-type: none;
                }

                i {
                    color: #F8E916;
                }

            }

            .overview {
                color: #fff;
                max-height: 200px;
                overflow: auto;
            }

            button {
                width: fit-content;
                height: 40px;
                cursor: pointer;
                border-style: none;
                background-color: $netflixColor;
                color: #fff;
                font-size: 15px;
                padding: 5px;
                border-radius: 3px;
                outline: none;
                box-shadow: 0px 2px 3px rgba(0, 0, 0, .4);
                transition: all .5s ease-in-out;

                &:hover {
                    transform: scale(.95) translateX(-5px);
                    transition: all .5s ease-in-out;
                }
            }


        }
    }

}

@media screen and (max-width: 1920px) {
    .col {
        width: calc(100% / 5 - 10px + (10px / 5));
    }
}

@media screen and (max-width: 1400px) {
    .col {
        width: calc(100% / 3 - 10px + (10px / 3));
    }
}
</style>