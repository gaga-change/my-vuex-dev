<template>
    <div id="Counter">
        <h2>计数器案例</h2>
        <h2 v-text="$store.state.count"> </h2> <span v-text="evenOrOdd"></span>
        <hr>
        <button type="button" @click="increment()">加一</button>
        <button type="button" @click="decrement()">减一</button>
        <button type="button" @click="incrementIfOdd()">如果是奇数加一</button>
        <button type="button" @click="incrementAsync()">异步加一</button>
    </div>
</template>

<script>
    import {mapGetters, mapActions } from 'vuex'
    export default {
        computed: {
            myCount: function () {
                return this.$store.state.count;
            },
            ...mapGetters([
                'evenOrOdd'
            ])
        },
        methods: mapActions([
            'increment',
            "decrement",
            'incrementIfOdd',
            'incrementAsync'
        ])
    }
</script>