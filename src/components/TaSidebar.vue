<template>
    <div class="ta-side">
        <ul class="ta-menu">
            <li :class="{'ta-active': item === $route.name}" v-for="(item, index) in items" :key="index">
                <router-link :to="item">{{item}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                'Servicos',
                'Contato'
            ]
        }
    },
    mounted() {
        console.log(this.$route.name);
    }
}
</script>

<style scoped>
.ta-side {
    background-color: #eee;
}
.ta-menu {
    list-style: none;
}
.ta-menu, .ta-menu li {
    padding: 0;
}

.ta-menu li {
    line-height: 50px;
    padding: 10px;
}

.ta-active {
    background-color: blue;
}
.ta-active a {
    color: white;
}
</style>