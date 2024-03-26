<template >
  <div class="page-head">
    <h1>S10特质与职业关系表</h1>
    <el-collapse class="chess-filter" v-model="activeName">
      <div style="display: flex; align-items: center; gap: 10px">
        <router-link to="/">首页</router-link>
      </div>
      <el-collapse-item title="职业" name="1">
        <el-checkbox-group v-model="job_checked" size="small">
          <el-checkbox
            v-for="job_i in job"
            :key="job_i.jobId"
            :value="job_i.jobId"
            >{{ job_i.name }}</el-checkbox
          >
        </el-checkbox-group>
      </el-collapse-item>
      <el-collapse-item title="特质" name="2">
        <el-checkbox-group v-model="race_checked" size="small">
          <el-checkbox
            v-for="race_i in race"
            :key="race_i.raceId"
            :value="race_i.raceId"
            >{{ race_i.name }}</el-checkbox
          >
        </el-checkbox-group>
      </el-collapse-item>
    </el-collapse>
  </div>
  <div class="table-head table-root">
    <div class="table-row">
      <div class="table-col flex-col head-div">
        <span>特质👉</span>
        <span>职业👇</span>
      </div>
      <div
        class="table-col"
        v-for="raceCol in race_effects"
        :key="raceCol.raceId"
      >
        <el-popover placement="bottom" :width="200" trigger="hover">
          <template #reference>
            <div class="flex-col">
              <img :src="raceCol.imagePath" :alt="raceCol.name" />
              <span>{{ raceCol.name }}</span>
            </div>
          </template>
          <div class="job-introduce">
            <div 
            class="level-desc"
            v-for="(level, index) in raceCol.level" :key="index">
              <span class="level">{{ index }}</span>
              {{ level }}
            </div>
            {{ raceCol.introduce }}
          </div>
        </el-popover>
      </div>
    </div>
  </div>
  <div class="table-root">
    <div class="table-row" v-for="jobRow in job_effects" :key="jobRow.jobId">
      <div class="table-col">
        <el-popover placement="bottom" :width="200" trigger="hover">
          <template #reference>
            <div class="flex-col">
              <img :src="jobRow.imagePath" :alt="jobRow.name" />
              <span>{{ jobRow.name }}</span>
            </div>
          </template>
          <div class="job-introduce">
            <div 
            class="level-desc"
            v-for="(level, index) in jobRow.level" :key="index">
              <span class="level">{{ index }}</span>
              {{ level }}
            </div>
            {{ jobRow.introduce }}
          </div>
        </el-popover>
      </div>
      <div
        class="table-col flex-col nopd"
        v-for="raceCol in race_effects"
        :key="raceCol.raceId"
      >
        <!-- <span>{{ jobRow.jobId }} {{ raceCol.raceId }}</span> -->
        <ChessItem :chessItems="findChess(jobRow.jobId, raceCol.raceId)" />
      </div>
    </div>
  </div>
</template>
<script>
import chess from "@/lib/chess";
import equip from "@/lib/equip";
import galaxy from "@/lib/galaxy";
import hex from "@/lib/hex";
import job from "@/lib/job";
import race from "@/lib/race";
import ChessItem from "./components/tableItem.vue";
export default {
  name: "Home",
  components: { ChessItem },
  data() {
    return {
      activeName: "",
      job_checked: job.map((t) => t.jobId),
      race_checked: race.map((t) => t.raceId),
      chess,
      equip,
      galaxy,
      hex,
      job,
      race,
    };
  },
  computed: {
    job_effects() {
      return job.filter((t) => {
        return this.job_checked.includes(t.jobId);
      });
    },
    race_effects() {
      return race.filter((t) => {
        return this.race_checked.includes(t.raceId);
      });
    },
  },
  methods: {
    findChess(jobid, raceid) {
      const arr = chess
        .filter((item) => item.jobIds.includes(jobid))
        .filter((item) => item.raceIds.includes(raceid));
      return arr;
    },
  },
};
</script>
<style lang="less" scoped>
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

.flex-col {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.head-div {
  position: relative;
  justify-content: center;
}
.table-head {
  position: sticky;
  top: 0;
  z-index: 3;
}
.nopd {
  //   padding: 0 !important;
}
.job-introduce {
  font-size: 12px;
}
.level-desc{
  display: flex;

}
.level{
  display: inline-block;
  width: 14px;
  height: 14px;
  background-color: #cca329;
  text-align: center;
  border-radius: 50%;
  color: #fff;
}
</style>