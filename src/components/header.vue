<template>
  <div class="head_ajud">
    <diV class="head">
      <div style="text-align:center">
        <img
          src="../../static/icon.jpg"
          style="line-height:50px"
          width="200px"
          height="30px"
          alt=""
        />
        <div>仓储管理系统</div>
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">采购管理</el-menu-item>
        <!-- <el-menu-item index="2"></el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4"
        >订单管理</el-menu-item
      > -->
      </el-menu>
    </diV>
    <div class="right">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <el-dropdown>
        <el-button type="text">
          登录人<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head_ajud {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head {
  display: flex;
}
.right {
  margin-right: 20px;
  display: flex;
  align-items: center;
}
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
</style>
