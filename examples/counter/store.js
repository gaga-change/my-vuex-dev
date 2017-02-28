import Vue from  "vue"
import Vuex from  "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        evenOrOdd: state => state.count % 2 === 0 ? "偶数" : "奇数"
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        }

    },
    actions: {
        increment: ({commit}) => commit('increment'),
        decrement: ({commit}) => commit('decrement'),
        incrementIfOdd({state, commit}) {
            if ((state.count + 1) % 2 === 0)
                commit('increment');
        },
        incrementAsync({commit}) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    commit('increment');
                    resolve();
                }, 1000)
            })
        }
    }
})


// const getters = {
//     eventOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
// };
//
// export  default  new Vuex.Store({
//     state,
//     getters,
//     actions,
//     mutations
// })
