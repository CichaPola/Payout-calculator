import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store ({
    state: {
        dataToPrint: {},
    },
    getters: {
        getData(state) {
            return state.dataToPrint;
        }
    },
    mutations: {
        setDataToPrint(state, payload) {
            state.dataToPrint= payload;
        }
    },
    actions: {
        setDataToPrint({commit}, data) {
            commit ('setDataToPrint', data)
        }
    },
});    
