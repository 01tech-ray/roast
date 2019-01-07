import Vue from 'vue';
import Vuex from 'vuex';
import cafes from './modules/cafes.js';
import brewMethods from './modules/brewMothods.js';

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        cafes,
        brewMethods
    }
})