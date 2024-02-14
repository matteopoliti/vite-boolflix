<template>
    <div class="col">
        <div class="info">
            <p v-if="propsElement.title">{{ propsElement.title }}</p>
            <p v-else>{{ propsElement.name }}</p>

            <span v-if="propsElement.original_title">{{ propsElement.original_title }}</span>
            <span v-else>{{ propsElement.original_name }}</span>
            <img :src="'https://flagcdn.com/w20/' + getCountryCode(propsElement.original_language) + '.png'"
                :alt="propsElement.original_language" width="20">
            <span>{{ propsElement.vote_average }}</span>
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
        }
    },
    methods: {
        getCountryCode(languageCode) {
            return this.languageToCountryCode[languageCode] || languageCode;
        }
    }

}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;

.col {
    width: calc(100% / 5 - 20px + (20px / 5));

    .info {
        padding: 20px;
        min-height: 150px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        p {
            color: #fff;
            text-transform: uppercase;
            font-size: 20px;
            font-weight: bold;
        }

        img {
            width: 20px;
            height: 20;
        }

        span {
            font-size: 20px;
            color: #fff;
        }
    }
}
</style>