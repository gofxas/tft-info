<template >
  <div class="chess-wrapper">
    <el-collapse class="chess-filter" v-model="activeName" accordion>
      <div style="display:flex;align-items:center;gap:10px">
        <router-link to="/">首页</router-link>
        <el-checkbox v-model="display_info">是否显示属性资料？</el-checkbox>
      </div>
      <el-collapse-item title="职业" name="1">
        <el-checkbox-group v-model="job_checked" size="small">
          <el-checkbox v-for="job in Job" :key="job.jobId" :value="job.jobId">{{
            job.name
          }}</el-checkbox>
        </el-checkbox-group>
      </el-collapse-item>
      <el-collapse-item title="特质" name="2">
        <el-checkbox-group v-model="race_checked" size="small">
          <el-checkbox
            v-for="race in Race"
            :key="race.raceId"
            :value="race.raceId"
            >{{ race.name }}</el-checkbox
          >
        </el-checkbox-group>
      </el-collapse-item>
      <el-collapse-item title="价格" name="3">
        <el-checkbox-group v-model="price_checked" size="small">
          <el-checkbox-button value="1">1金币</el-checkbox-button>
          <el-checkbox-button value="2">2金币</el-checkbox-button>
          <el-checkbox-button value="3">3金币</el-checkbox-button>
          <el-checkbox-button value="4">4金币</el-checkbox-button>
          <el-checkbox-button value="5">5金币</el-checkbox-button>
        </el-checkbox-group>
      </el-collapse-item>
    </el-collapse>

    <div class="chess-layer">
      <ChessItems
        :display_info="display_info"
        v-for="chess in Chess"
        :key="chess.chessId"
        :data="chess"
      />
    </div>
  </div>
</template>
<script>
import chess from "@/lib/chess";
import job from "@/lib/job";
import race from "@/lib/race";
import ChessItems from "./chess-item.vue";
export default {
  name: "Chess",
  components: {
    ChessItems,
  },
  data() {
    return {
      activeName: "",
      display_info: false,
      Job: job,
      Race: race,
      job_checked: [],
      race_checked: [],
      price_checked: ["1", "2", "3", "4", "5"],
    };
  },
  computed: {
    Chess() {
      return chess
        .sort((a, b) => a.price - b.price)
        .filter((t) => {
          let a1 = t.raceIds.split(",");
          let a2 = this.race_checked;
          let b1 = t.jobIds.split(",");
          let b2 = this.job_checked;
          return (
            a1.filter((item) => a2.includes(item)).length ||
            b1.filter((item) => b2.includes(item)).length ||
            this.price_checked.includes(t.price)
          );
        });
    },
  },
};
</script>
<style lang="less" scoped>
.chess-wrapper {
  padding: 12px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;
}
.chess-layer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.chess-filter {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #fff;
}
</style>