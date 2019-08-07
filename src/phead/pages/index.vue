<template>
  <div style="textAlign:center;marginTop:10%;">
    <div>显示成功1 {{pageTitle}}</div>
    <el-button type="primary">主要按钮</el-button>

    <div class="content-wrap content-flex root-list">
      <ul class="root-pxu">
        <li
          v-for="(ite, ind) in list"
          :key="ind"
          @click="checkType(ite)"
          data="godLevel"
          :class="['root-paixu', 'root-item' + ite.type]"
        >
          {{ite.name}}
          <i :class="['el-icon-caret-top', 'root-item' + ite.type]"></i>
          <i :class="['el-icon-caret-bottom', 'root-item' + ite.type]"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      list: [
        { name: "股神评级", active: false, type: 0 },
        { name: "退出周期", active: false, type: 0 },
        { name: "佣金", active: false, type: 0 },
        { name: "总金额", active: false, type: 0 },
        { name: "股神出资", active: false, type: 0 },
        { name: "投资笔数", active: false, type: 0 }
      ]
    };
  },
  methods: {
    checkType(ite) {
      if (ite.type == 0) this.list.map(e=>e.type = 0)
      ite.type < 2 ? ite.type++ : (ite.type = 0);
      console.log(ite.type);
    }
  },
  computed: {
    ...mapState(["pageTitle"])
  }
};
</script>
<style lang="less">
.root-list {
  height: 59px;
  width: 1200px;
  background-color: #e9e9e9;
  margin: 6px auto;
  line-height: 59px;
  font-size: 14px;
  .root-pxu {
    margin-left: 30px;
    li {
      margin: 0;
      padding: 0;
      list-style: none;
      margin-right: 60px;
      float: left;
      font-size: 14px;
      color: #333;
      cursor: pointer;
      position: relative;
      font-family: Microsoft YaHei;
      .root-item0 {
        display: none;
      }
      .el-icon-caret-top.root-item1, .el-icon-caret-top.root-item2 {
        width: 10px;
        height: 10px;
        position: absolute;
        right: -17px;
        top: 16px;
      }
      .el-icon-caret-bottom.root-item1, .el-icon-caret-bottom.root-item2 {
        width: 10px;
        height: 10px;
        position: absolute;
        right: -17px;
        top: 25px;
      }
      i {
        color: #bbb;
        font-size: 20px;
      }
    }
    .root-item1 {
        .el-icon-caret-top {
            color: #777;
        }
    }
    .root-item2 {
        .el-icon-caret-bottom {
            color: #777;
        }
    }
  }
}
</style>