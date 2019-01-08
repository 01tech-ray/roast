<style lang="scss">
    @import '~@/abstracts/variables.scss';
    span.toggle-like {
        display: inline-block;
        margin:auto;
        span.like-toggle {
            cursor: pointer;
            color: #8E8E8E;
            font-size: 18px;
            margin-bottom: 5px;
            span.image-container {
                width: 35px;
                text-align: center;
                display: inline-block;
            }
        }
        span.like-count {
            font-family: "Lato", sans-serif;
            font-size: 12px;
            margin-left: 10px;
            color: #8E8E8E;
        }
    }
</style>
<template>
    <span class="toggle-like">
        <span class="like-toggle" v-on:click="likeCafe( cafe.id )"
              v-if="!cafeLiked && cafeLoadStatus === 2 && cafeLikeActionStatus !== 1 && cafeUnlikeActionStatus !== 1">
            喜欢
        </span>
        <span class="like-toggle" v-on:click="unlikeCafe( cafe.id )"
          v-if="cafeLiked && cafeLoadStatus === 2 && cafeLikeActionStatus !== 1 && cafeUnlikeActionStatus !== 1">
            取消喜欢
        </span>
    </span>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState({
            cafeLoadStatus:state=>state.cafes.cafeLoadStatus,
            cafe:state=>state.cafes.cafe,
            cafeLiked:state=>state.cafes.cafeLiked,
            cafeLikeActionStatus:state=>state.cafes.cafeLikeActionStatus,
            cafeUnlikeActionStatus:state=>state.cafes.cafeUnlikeActionStatus
        })
    },
    methods:{
        likeCafe(cafeID){
            this.$store.dispatch('cafes/postLikeCafe',{
                id:cafeID
            });
        },
        unlikeCafe(cafeID){
            this.$store.dispatch('cafes/deleteLikeCafe',{
                id:cafeID
            })
        }
    }
}
</script>
