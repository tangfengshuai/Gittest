<template>
  <div class="hello">
    <el-form
      :inline="true"
      :model="formInline"
      :class="{ 'demo-form-inline': true, 'form-data': true }"
    >
      <el-form-item label="采购人员">
        <el-input
          v-model="formInline.user"
          placeholder="请输入采购人员"
        ></el-input>
      </el-form-item>
      <el-form-item label="采购时间">
        <el-date-picker
          @change="ss"
          v-model="formInline.value2"
          type="daterange"
          align="right"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker
      ></el-form-item>
      <el-form-item label="采购数量">
        <el-input
          v-model="formInline.num"
          placeholder="请输入采购的数量"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="select_button">
      <el-button type="primary">查询</el-button>
      <el-button
        ><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-chexian"></use></svg
        >重置</el-button
      >
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="start_time" label="开始时间"> </el-table-column>
        <el-table-column prop="end_time" label="结束时间"> </el-table-column>
        <el-table-column prop="personal" label="采购人员"> </el-table-column>
        <el-table-column prop="purchase_number" label="采购数量">
        </el-table-column>
        <el-table-column prop="product" label="采购产品"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["injectData"],
  data() {
    return {
      formInline: {
        user: "",
        value2: "",
        num: ""
      },
      tableData: [
        {
          start_time: "2016-05-02",
          end_time: "2016-05-03",
          personal: "张三",
          purchase_number: "3",
          product: "电脑"
        },
        {
          start_time: "2016-05-04",
          end_time: "2016-05-05",
          personal: "李四",
          purchase_number: "90",
          product: "冰箱"
        },
        {
          start_time: "2016-05-01",
          end_time: "2016-05-02",
          personal: "王五",
          purchase_number: "35553",
          product: "点心"
        },
        {
          start_time: "2016-05-03",
          end_time: "2016-05-04",
          personal: "赵六",
          purchase_number: "68553",
          product: "机器设备"
        }
      ]
    };
  },
  async mounted() {
    let a = await this.injectData.myinject();
    console.log(a);
    // axios
    //   .get("http://localhost:3000/")
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
  methods: {
    ss() {
      console.log(this.formInline.value2);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select_button {
  text-align: center;
}
.form-data {
  display: flex;
  justify-content: space-between;
}
.el-menu {
  border-right: none !important;
}
</style>
