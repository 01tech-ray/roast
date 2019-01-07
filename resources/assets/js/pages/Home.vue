<style>

</style>

<template>
  <div>
    <span v-show="cafesLoadStatus === 1">加载中...</span>
    <span v-show="cafesLoadStatus === 2">数据加载成功！</span>
    <span v-show="cafesLoadStatus === 3">数据加载失败！</span>
    {{cafesLoadStatus}}
  </div>
</template>

<script>
  import {  mapState } from 'vuex'
  export default {
    created(){
      const tmp=this.$store.getters['cafes/getCafesLoadStatus']
      console.log(tmp)
    },
    computed:{
      ...mapState({
        cafesLoadStatus: state=> state.cafes.cafesLoadStatus,
        cafes: state=> state.cafes.cafes
      })
      // cafesLoadStatus(){
      //   return this.$store.getters['cafes/getCafesLoadStatus']

      // },
      // cafes(){
      //   return this.$store.getters['cafes/getCafes']
      // }
    }
  }
</script>