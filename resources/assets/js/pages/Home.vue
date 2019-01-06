<style>

</style>

<template>
  <div>
    <span v-show="cafesLoadStatus === 1">加载中...</span>
    <span v-show="cafesLoadStatus === 2">数据加载成功！</span>
    <span v-show="cafesLoadStatus === 3">数据加载失败！</span>
    test
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    created(){
      this.$store.dispatch('loadCafes');
    },
    computed:{
      // ...mapState({
      //   cafesLoadStatus: state=> state.cafes.cafesLoadStatus,
      //   cafes: state=> state.cafes.cafes
      // })
      // 获取 cafes 加载状态
            cafesLoadStatus(){
                return this.$store.getters.getCafesLoadStatus;
            },

            // 获取 cafes
            cafes(){
                return this.$store.getters.getCafes;
            }
    }
  }
</script>