<template>
    <div>
      <div>home组件</div>
     <el-button type="info" @click="logout">退出</el-button>
    </div>
</template>


<script>
export default {
  methods: {
    logout(){
      //清除所有的token
      window.sessionStorage.clear()
      this.$router.push('/login');
    }
  }
}
</script>


<style lang="less" scoped>

  
</style>