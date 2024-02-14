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
                <div>
                    <span>Vote: </span>
                    <span v-html="getStar(Math.ceil(propsElement.vote_average / 2))" class="star"> </span>
                </div>
                <div class="overview">
                    <p>Overview: {{ propsElement.overview }}</p>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
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

            voteToStar: {
                0: '<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>',
                1: '<i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>',
                2: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>',
                3: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>',
                4: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>',
                5: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',

            }

        }
    },
    methods: {
        getCountryCode(languageCode) {
            return this.languageToCountryCode[languageCode] || languageCode;
        },

        getStar(vote) {
            return this.voteToStar[vote];
        }
    }

}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;

.col {
    width: calc(100% / 7 - 10px + (10px / 7));

    >div {
        position: relative;


        &:hover .info {
            opacity: 1;
        }

        &:hover figure {
            opacity: 0.1;
        }

        figure {
            img {
                width: 342px;
                height: 513px;
            }
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

            .star {
                color: #F8E916;
            }

            .overview {
                color: #fff;
                max-height: 200px;
                overflow: auto;
            }
        }
    }

}
</style>