import CafeAPI from '../../api/cafe.js';

const state={
    cafes:[],
    cafesLoadStatus:0,
    cafe:{},
    cafeLoadStatus:0,

    cafeAddStatus:0
}
const getters={
    getCafesLoadStatus( state ){
        return state.cafesLoadStatus;
      },
  
      getCafes( state ){
        return state.cafes;
      },
  
      getCafeLoadStatus( state ){
        return state.cafeLoadStatus;
      },
  
      getCafe( state ){
        return state.cafe;
      }
}

const actions={
    loadCafes({commit}){
        commit('setCafesLoadStatus',1);

        CafeAPI.getCafes().then(function(response){
            commit('setCafes',response.data);
            commit('setCafesLoadStatus',2);
        }).catch(function(){
            commit('setCafesLoadStatus',3);
            commit('setCafes',[]);
        })
    },
    loadCafe({commit}){
        commit('setCafeLoadStatus',1);
        
        CafeAPI.getCafe().then(function(response){
            commit('setCafe',response.data);
            commit('setCafeLoadStatus',2);
        }).catch(function(){
            commit('setCafe',{});
            commit('setCafeLoadStatus',3);
        })
    },
    addCafe({commit,state,dispatch},data){
        // 状态1表示开始添加
        commit( 'setCafeAddStatus', 1 );

        CafeAPI.postAddNewCafe( data.name, data.address, data.city, data.state, data.zip )
                .then( function( response ){
                    // 状态2表示添加成功
                    commit( 'setCafeAddStatus', 2 );
                    dispatch( 'loadCafes' );
                })
                .catch( function(){
                    // 状态3表示添加失败
                    commit( 'setCafeAddStatus', 3 );
                });
    }
}

const mutations={
    setCafesLoadStatus(state,status){
        this.state.cafesLoadStatus=status;
    },
    setCafes(state,cafes){
        this.state.cafes=cafes;
    },
    setCafeLoadStatus(state,status){
        this.state.cafeLoadStatus=status;
    },
    setCafe(state,cafe){
        this.state.cafe=cafe;
    },
    setCafeAddStatus(state,status){
        this.state.cafeAddStatus=status;
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}