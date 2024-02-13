<template>
    <header>
        <div>
            <figure>
                <img src="../../assets/img/Netflix_Logo_RGB.png" alt="Logo Netflix">
            </figure>
        </div>
        <div>
            <input type="text">
            <button>Search</button>
        </div>
    </header>
</template>

<script>
export default {
    name: "AppHeader",
    data() {

        return {}
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

header {
    background-color: #1B1B1B;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    figure {
        img {
            width: 200px;
        }
    }

    div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #edeef0;
        border-radius: 10px;
        padding-left: 20px;
        margin-bottom: 25px;

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