import CafeAPI from '../../api/cafe.js';

const state={
    cafes:[],
    cafesLoadStatus:0,
    cafe:{},
    cafeLoadStatus:0,

    cafeAddStatus:0,

    cafeLikeActionStatus:0,
    cafeUnlikeActionStatus:0,
    cafeLiked:false
}
const getters={
    // getCafesLoadStatus( state ){
    //     return state.cafesLoadStatus;
    //   },
  
    //   getCafes( state ){
    //     return state.cafes;
    //   },
  
    //   getCafeLoadStatus( state ){
    //     return state.cafeLoadStatus;
    //   },
  
    //   getCafe( state ){
    //     return state.cafe;
    //   }
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
    loadCafe({commit},data){
        commit('setCafeLoadStatus',1);
        
        CafeAPI.getCafe(data.id).then(function(response){
            commit('setCafe',response.data);
            if(response.data.user_like.length>0){
                commit('setCafeLikedStatus',true);
            }
            commit('setCafeLoadStatus',2);
        })
    },
    addCafe({commit,state,dispatch},data){
        // 状态1表示开始添加
        commit( 'setCafeAddStatus', 1 );

        CafeAPI.postAddNewCafe( data.name, data.locations, data.website, data.description, data.roaster )
                .then( function( response ){
                    // 状态2表示添加成功
                    commit( 'setCafeAddStatus', 2 );
                    dispatch( 'loadCafes' );
                })
                .catch( function(){
                    // 状态3表示添加失败
                    commit( 'setCafeAddStatus', 3 );
                });
    },
    postLikeCafe({commit},data){
        commit('setCafeLikeActionStatus',1);
        CafeAPI.postLikeCafe(data.id).then(function(response){
            commit('setCafeLikedStatus',true);
            commit('setCafeLikeActionStatus',2);
        }).catch(function(){
            commit('setCafeLikeActionStatus',3);
        })
    },
    deleteLikeCafe({commit},data){
        commit('setCafeUnlikeActionStatus',1);
        CafeAPI.deleteLikeCafe(data.id).then(function(response){
            commit('setCafeUnlikeActionStatus',2);
            commit('setCafeLikedStatus',false);
        }).catch(function(){
            commit('setCafeUnlikeActionStatus',3);
        })
    }

}

const mutations={
    setCafesLoadStatus(state,status){
        state.cafesLoadStatus=status;
    },
    setCafes(state,cafes){
        state.cafes=cafes;
    },
    setCafeLoadStatus(state,status){
        state.cafeLoadStatus=status;
    },
    setCafe(state,cafe){
        state.cafe=cafe;
    },
    setCafeAddStatus(state,status){
        state.cafeAddStatus=status;
    },
    setCafeLikeActionStatus(state,status){
        state.cafeLikeActionStatus = status;
    },
    setCafeLikedStatus(state,status){
        state.cafeLiked=status;
    },
    setCafeUnlikeActionStatus(state,status){
        state.cafeUnlikeActionStatus =status;
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}