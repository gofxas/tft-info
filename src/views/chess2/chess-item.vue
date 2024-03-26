<template >
  <div :class="['chess-item', 'cost1', 'cost' + data.price]">
    <img
      class="chess-cover"
      :src="baseimgs11 + data.TFTID + '.jpg'"
      :alt="data.title"
    />
    <img class="chess-avatar" :src="headimg + data.name" :alt="data.title" />
    <span class="chess-title">{{ data.title }}</span>
    <span class="chess-displayname">{{ data.displayName }}</span>
    <span class="chess-displayname">价格：{{ data.price }}</span>
    <div class="info-box">
      <div class="info-box-item">
        <img :src="data.skillImage">
        <p>{{ data.skillIntroduce }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "chess-item",
  props: {
    data: {
      default: () => ({}),
      type: Object,
    },
    display_info:{
        default:false,
        type: Boolean
    }
  },
};
</script>
<style lang="less" scoped>
.chess-item {
  position: relative;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: calc(50% - 3px);
  box-sizing: border-box;
  font-size: 12px;
  &:hover .chess-cover {
    opacity: 0.7;
  }
}
.chess-cover {
  width: 100%;
  max-height: 143px;
  display: block;
}
.chess-avatar {
  display: block;
  width: 48px;
  border-radius: 50%;
}
.chess-title {
  font-weight: bold;
}
.chess-displayname {
  color: var(--el-color-info-dark-2);
}
.info-box {
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 8px;
  &-item {
    p {
      margin: 0;
    }
  }
}
.cost1 {
  border: 2px solid #999;
  background-color: #9993;
}
.cost2 {
  border: 2px solid #5fcc29;
  background-color: #5fcc2933;

}
.cost3 {
  border: 2px solid #297acc;
  background-color: #297acc33;

}
.cost4 {
  border: 2px solid #cc29cc;
  background-color: #cc29cc33;

}
.cost5 {
  border: 2px solid #cca329;
  background-color: #cca32933;

}
</style>