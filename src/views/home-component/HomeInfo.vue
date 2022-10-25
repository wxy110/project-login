<template>
  <div class="container1">
    <div class="header1">
      <el-row type="flex" class="row-bg">
        <el-col :span="10">
          <div class="grid-content bg-purple">积分获取/</div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple">活动积分/</div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple">选择活动/</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">添加商品</div>
        </el-col>
      </el-row>
    </div>
    <div class="main1">
      <span font-size: 18px large solt="title">活动基本信息</span>
      <div class="input1">
        活动名称
        <el-input v-model="input" placeholder="请输入活动名称"></el-input>
      </div>
      <div class="date">
        活动日期 <div class="date">
          <el-date-picker
            v-model="value2"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EventBus, { EventType } from "@/bus/index.js";
export default {
  name: "HomeInfo",
  data() {
    return {
      input: "",
    };
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: "",
      value2: "",
    };
  },
};
</script>
<style lang="scss">
.container1 {
  padding: 10px;
  margin: 0;
  .header1 {
    height: 20px;
    background-color: null;
    margin: 10px;
    width: 100%;
    display: flex;
    .el-row {
      margin-bottom: 20px;
      display: flex;
      &:last-child {
        margin-bottom: 10px;
      }
    }
    .el-col {
      border-radius: 5px;
    }
    .bg-purple-dark {
      background: null;
    }
    .bg-purple {
      background: null;
    }
    .bg-purple-light {
      background: #eff1f3;
    }
    .grid-content {
      border-radius: 10px;
      min-height: 36px;
    }
    .row-bg {
      padding: 5px;
      background-color: #f9fafc;
    }
  }
  .main1 {
    padding: 10px;
    background-color: #d6dce7;
    height: 100%;

    .title {
      font-family: "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      
    }
    .input1 {
      display: flex;
      margin: 5px;
    }
    .date{
      display: flex;
     
    }
  }
}
</style>