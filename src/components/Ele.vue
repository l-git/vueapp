<template>
  <div>
      <div>
    <el-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949">
  
</el-switch>
      </div>

      <div>

 <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>

      </div>
    </div>
</template>

<script>
export default {
  name:'Ele',
  data () {
    return {
        value1: true,
        value2: true,
        activeName: 'second',
      msg: 'Hello world!'
    }
  },
   methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style>

</style>


