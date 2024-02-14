<template>
    <header>
        <div>
            <figure>
                <img src="../../assets/img/Netflix_Logo_RGB.png" alt="Logo Netflix">
            </figure>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="#">Serie tv</a></li>
                    <li><a href="#">film</a></li>
                    <li><a href="#">categorie</a></li>
                    <li><a href="#">la mia lista</a></li>
                </ul>

            </nav>
        </div>
        <div>
            <input type="text" id="movie" placeholder="Movies, TV series..." v-model="store.searchText">
            <button @click.prevent="$emit('performSearch')">Search</button>
        </div>
    </header>
</template>

<script>
import { store } from '../../store';

export default {
    name: "AppHeader",
    data() {

        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

header {
    background-color: $bg_header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1;

    >div:first-child {
        display: flex;
        align-items: center;
        gap: 100px;

        figure {
            img {
                width: 200px;
            }
        }

        nav {
            ul {
                display: flex;
                align-items: center;
                gap: 60px;
                list-style-type: none;

                li {

                    a {
                        color: #fff;
                        text-decoration: none;
                        font-size: 20px;
                    }

                    &:hover a {
                        color: $netflixColor;
                    }
                }
            }
        }
    }


    div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #edeef0;
        border-radius: 10px;
        padding-left: 20px;

        input {
            flex: 1;
            border: none;
            outline: none;
            background: transparent;
            padding: 10px;
            font-weight: 14px;
            font-size: 20px;
        }

        button {
            border: none;
            outline: none;
            padding: 16px 50px;
            background-color: $netflixColor;
            color: #ffffff;
            font-size: 18px;
            cursor: pointer;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }

}
</style>