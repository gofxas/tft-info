<template >
  <div>
    <div class="header">
      <router-link to="/">首页</router-link>
      <el-checkbox-group v-model="hex_checked" size="small">
        <el-checkbox value="1">白银阶</el-checkbox>
        <el-checkbox value="2">黄金阶</el-checkbox>
        <el-checkbox value="3">棱彩阶</el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="wrapper">
      <div class="item" v-for="item in baseHex" :key="item.hexId">
        <img :src="item.imgUrl" width="40" />
        <div class="item-name">{{ item.name }}</div>
        <div class="item-desc">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import hex from "@/lib2/hex";
export default {
  name: "hex",
  data() {
    return {
      Hex: hex
        .filter((t) => t.isShow == "1")
        .sort((a, b) => Number(a.type) - Number(b.type)),
      hex_checked: ["1", "2", "3"],
    };
  },
  computed: {
    baseHex() {
      return this.Hex.filter((t) => this.hex_checked.includes(t.type))
    },
  },
};
</script>
<style lang="less" scoped>
@itemw: 175px;
.header {
    width: 100%;
    background-color: #fff;
    position: sticky;
    z-index: 1;
    top: 0;
}
.wrapper {
  width: 100%;
  gap: 10px;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, @itemw);
  justify-content: center;
  .item {
    width: @itemw;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-name {
      font-weight: bold;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    &-desc {
      font-size: 13px;
      color: #655;
      text-indent: 2em;
    }
  }
}


</style>