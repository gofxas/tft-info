<template >
  <div>
    <el-checkbox-group v-model="equ_checked" size="small">
      <el-checkbox
        v-for="equ in baseEquip1"
        :key="equ.equipId"
        :value="equ.equipId"
        >{{ equ.name }}</el-checkbox
      >
    </el-checkbox-group>
    <div class="table-head table-root">
      <div class="table-row">
        <div class="table-col flex-col head-div">
          <span>基础物品</span>
        </div>
        <div class="table-col" v-for="equ in baseEquip1" :key="equ.equipId">
          <div class="flex-col">
            <img class="icon" :src="equ.imagePath" :alt="equ.name" />
            <span style="text-align: center">{{ equ.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="table-root">
      <div class="table-row" v-for="equ in baseEquip" :key="equ.equipId">
        <div class="table-col">
          <div class="flex-col">
            <img class="icon" :src="equ.imagePath" :alt="equ.name" />
            <span style="text-align: center">{{ equ.name }}</span>
          </div>
        </div>
        <div class="table-col" v-for="equ2 in baseEquip1" :key="equ2.equipId">
          <el-popover placement="bottom" :width="200" trigger="hover">
            <template #reference>
              <div class="flex-col">
                <img
                  class="icon"
                  :src="findType2(equ.equipId, equ2.equipId).imagePath"
                  :alt="findType2(equ.equipId, equ2.equipId).name"
                />
                <span style="text-align: center">{{
                  findType2(equ.equipId, equ2.equipId).name
                }}</span>
              </div>
            </template>
            <div class="eqdesc">
              <p>名称：{{ findType2(equ.equipId, equ2.equipId).name }}</p>
              <p>效果：{{ findType2(equ.equipId, equ2.equipId).effect }}</p>
              <p>关键词：{{ findType2(equ.equipId, equ2.equipId).keywords }}</p>
            </div>
          </el-popover>
        </div>
      </div>
    </div>
    <div>光明武器</div>
    <div class="wrapper">
      <div class="item" v-for="item in guang" :key="item.equipId">
        <img :src="item.imagePath" width="40" />
        <div class="item-name">{{ item.name }}</div>
        <div class="item-desc">{{ item.effect }}</div>
        <div class="item-desc">{{ item.keywords }}</div>
      </div>
    </div>
    <div>奥恩武器</div>
    <div class="wrapper">
      <div class="item" v-for="item in aoen" :key="item.equipId">
        <img :src="item.imagePath" width="40" />
        <div class="item-name">{{ item.name }}</div>
        <div class="item-desc">{{ item.effect }}</div>
        <div class="item-desc">{{ item.keywords }}</div>
      </div>
    </div>
    <div>转职（无法合成）</div>
    <div class="wrapper">
      <div class="item" v-for="item in zuan" :key="item.equipId">
        <img :src="item.imagePath" width="40" />
        <div class="item-name">{{ item.name }}</div>
        <div class="item-desc">{{ item.effect }}</div>
        <div class="item-desc">{{ item.keywords }}</div>
      </div>
    </div>
    <div>系统发放7</div>
    <div class="wrapper">
      <div class="item" v-for="item in wq7" :key="item.equipId">
        <img :src="item.imagePath" width="40" />
        <div class="item-name">{{ item.name }}</div>
        <div class="item-desc">{{ item.effect }}</div>
        <div class="item-desc">{{ item.keywords }}</div>
      </div>
    </div>
    <div>系统发放8</div>
    <div class="wrapper">
      <div class="item" v-for="item in wq8" :key="item.equipId">
        <img :src="item.imagePath" width="40" />
        <div class="item-name">{{ item.name }}</div>
        <div class="item-desc">{{ item.effect }}</div>
        <div class="item-desc">{{ item.keywords }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import equip from "@/lib2/equip";
export default {
  name: "equip",
  data() {
    return {
      Equip: equip.filter((t) => t.isShow == "1"),
      equ_checked: equip.filter((t) => t.type == "1").map((t) => t.equipId),
    };
  },
  computed: {
    baseEquip() {
      return this.Equip.filter((t) => t.type == 1).filter((t) =>
        this.equ_checked.includes(t.equipId)
      );
    },
    baseEquip1() {
      return this.Equip.filter((t) => t.type == 1);
    },
    guang() {
      return this.Equip.filter((t) => t.type == 3);
    },
    aoen() {
      return this.Equip.filter((t) => t.type == 6);
    },
    zuan() {
      return this.Equip.filter((t) => t.type == 5);
    },
    wq7() {
      return this.Equip.filter((t) => t.type == 7);
    },
    wq8() {
      return this.Equip.filter((t) => t.type == 8);
    },
  },
  methods: {
    findType2(x, y) {
      return this.Equip.find(
        (t) => t.formula.includes(x) && t.formula.includes(y)
      );
    },
  },
};
</script>
<style lang="less" scoped>
@itemw:175px;
.table-root {
  display: block;
  width: fit-content;
  border-bottom: 1px solid #e6e6e6;
  font-size: 12px;
}
.table-row {
  display: flex;
  .table-col {
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    min-height: 38px;
    padding: 4px;
    background-color: #fff;
    border-top: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    box-sizing: border-box;
    &:first-child {
      position: sticky;
      z-index: 2;
      left: 0;
    }
  }
}
.table-head {
  position: sticky;
  top: 0;
  z-index: 3;
}
.flex-col {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.icon {
  width: 30px;
  height: 30px;
}
.eqdesc p {
  margin: 0;
  font-size: 12px;
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