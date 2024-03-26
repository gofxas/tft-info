<template >
  <div class="chess-items">
    <template v-if="chessItems.length">
      <div v-for="item in chessItems" :key="item.chessId">
        <el-popover placement="bottom" :width="200" trigger="hover">
          <template #reference>
            <div class="chess">
              <img
                :class="['chess-img', 'cost1', 'cost' + item.price]"
                :src="this.headimg + item.name"
              />
              <span
                :class="['chess-name', 'cost-text1', 'cost-text' + item.price]"
                >{{ item.displayName }}</span
              >
            </div>
          </template>
          <div class="chess-hover">
            <img
              class="chess-preview"
              :src="this.baseimg + item.TFTID + '.jpg'"
            />
            <div class="chess-skill">{{ item.skillDetail }}</div>
          </div>
        </el-popover>

        <!--  -->
      </div>
    </template>
    <template v-else></template>
  </div>
</template>
<script>
export default {
  name: "table-item",
  props: {
    chessItems: {
      default: () => [],
      type: Array,
    },
  },
};
</script>
<style lang="less" scoped>
.chess-items {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.chess {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover .chess-hover {
    display: block;
  }
}
.chess-img {
  width: 40px;
}
.chess-name {
  text-align: center;
}
.chess-skill {
  padding: 8px;
  font-size: 12px;
  color: #3f3f3f;
}
.chess-hover {
  width: 180px;
  background-color: #fff;
  filter: drop-shadow(0 0 2em #fcbde7aa);
  .chess-preview {
    width: 100%;
  }
}
.cost1 {
  border: 2px solid #999;
  color: #999;
  background-color: #9993;
}
.cost2 {
  border: 2px solid #5fcc29;
  color: #5fcc29;
  background-color: #5fcc2933;
}
.cost3 {
  border: 2px solid #297acc;
  color: #297acc;
  background-color: #297acc33;
}
.cost4 {
  border: 2px solid #cc29cc;
  color: #cc29cc;
  background-color: #cc29cc33;
}
.cost5 {
  border: 2px solid #cca329;
  color: #cca329;
  background-color: #cca32933;
}

.cost-text1 {
  color: #999;
}
.cost-text2 {
  color: #5fcc29;
}
.cost-text3 {
  color: #297acc;
}
.cost-text4 {
  color: #cc29cc;
}
.cost-text5 {
  color: #cca329;
}
</style>