<template>
    <div class="col">
        <div class="info">
            <figure>
                <img v-if="(propsElement.poster_path === null)" src="../../assets/img/anteprima-non-disponibile.jpg"
                    :alt="propsElement.title">
                <img v-else :src="'http://image.tmdb.org/t/p/w342' + propsElement.poster_path" :alt="propsElement.title">
            </figure>

            <h5>{{ propsElement.title ? propsElement.title : propsElement.name }}</h5>

            <span>{{ propsElement.original_title ? propsElement.original_title : propsElement.original_name }}</span>
            <img :src="'https://flagcdn.com/w20/' + getCountryCode(propsElement.original_language) + '.png'"
                :alt="propsElement.original_language" width="20">
            <span v-html="getStar(Math.ceil(propsElement.vote_average / 2))" class="star"></span>
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

    .info {

        min-height: 150px;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: space-between;
        align-items: center;

        figure {
            img {
                width: 342px;
                height: 513px;
            }
        }

        h5 {
            color: #fff;
            text-transform: uppercase;
            font-size: 20px;
        }

        img {
            width: 20px;
            height: 20;
        }

        span {
            font-size: 16px;
            color: #fff;

        }

        .star {
            color: #F8E916;
        }
    }
}
</style>