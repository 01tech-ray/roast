import BrewMethodAPI from '../../api/brewMethod';

const state={
    brewMethods:[],
    brewMethodsLoadStatus:0
}

const actions={
    loadBrewMethods({commit}){
        commit('setBrewMethodsLoadStatus',1);

        BrewMethodAPI.getBrewMethods().then(function(response){
            commit('setBrewMethods',response.data);
            commit('setBrewMethodsLoadStatus',2);
        }).catch(function(){
            commit('setBrewMethods',[]);
            commit('setBrewMethodsLoadStatus',3);
        })
    }
}

const mutations={
    setBrewMethodsLoadStatus(state,status){
        state.brewMethodsLoadStatus= status
    },
    setBrewMethods(state,brewMethods){
        state.brewMethods=brewMethods
    }

}

const getters={

}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}