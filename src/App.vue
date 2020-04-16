<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Sider></Sider>
        </el-aside>
        <el-container :style="{ minHeight: 'calc(100vh - 120px)' }">
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Sider from "./components/Sider.vue";
export default {
  name: "App",
  components: {
    Header,
    Sider
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  margin: 0px;
}
.el-header,
.el-footer {
  background-color: #ffffff;
  color: #333;
  padding: 0px;
}
.el-aside {
  background-color: #ffffff;
  color: #333;
}

.el-main {
  background-color: #ffffff;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
