<template>
  <div class="skill">
    <div class="skill-name">
      <h6>{{ $t(`Stats.${group}.${code}`) }}</h6>
    </div>
    <div class="skill-bar">
      <div :class="`skill-bar-${lvl}`"></div>
      <LvlIcon1 class="skill-lvl" v-if="lvl === 1" />
      <LvlIcon2 class="skill-lvl" v-else-if="lvl === 2" />
      <LvlIcon3 class="skill-lvl" v-else-if="lvl === 3" />
      <LvlIcon4 class="skill-lvl" v-else-if="lvl === 4" />
      <LvlIcon5 class="skill-lvl" v-else-if="lvl === 5" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    group: String,
    code: String,
    lvl: Number
  },
  components: {
    LvlIcon1: () => import(`@carbon/icons-vue/es/number--1/32`),
    LvlIcon2: () => import(`@carbon/icons-vue/es/number--2/32`),
    LvlIcon3: () => import(`@carbon/icons-vue/es/number--3/32`),
    LvlIcon4: () => import(`@carbon/icons-vue/es/number--4/32`),
    LvlIcon5: () => import(`@carbon/icons-vue/es/number--5/32`)
  }
}
</script>

<style lang="scss">
.skill {
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
}

.skill-name {
  height: 40px;
  display: flex;
  align-items: flex-end;
}

.skill-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: center;
}

.skill-lvl {
  width: 32px;
  height: 32px;
}

@media (min-width: 700px) {
  .skill {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .skill-name {
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
  }
  .skill-bar {
    width: calc(100% - 145px);
  }
}

@keyframes skillColorWheel {
  0% {
    filter: hue-rotate(-30deg);
  }
  50% {
    filter: hue-rotate(30deg);
  }
  100% {
    filter: hue-rotate(-30deg);
  }
}

.skill-bar-1,
.skill-bar-2,
.skill-bar-3,
.skill-bar-4,
.skill-bar-5 {
  height: 20px;
  animation: skillColorWheel 60s ease infinite;
  background-size: 400% 400%;
}

.skill-bar-1 {
  width: calc(20% - 32px);
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #f6f2ff 0%, #d9fbfb 100%);
}

.skill-bar-2 {
  width: calc(40% - 32px);
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #f6f2ff 0%, #d9fbfb 50%, #9ef0f0 100%);
}

.skill-bar-3 {
  width: calc(60% - 32px);
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #f6f2ff 0%, #d9fbfb 33%, #9ef0f0 67%, #3ddbd9 100%);
}

.skill-bar-4 {
  width: calc(80% - 32px);
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #f6f2ff 0%, #d9fbfb 25%, #9ef0f0 50%, #3ddbd9 75%, #08bdba 100%);
}

.skill-bar-5 {
  width: calc(100% - 32px);
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #f6f2ff 0%, #d9fbfb 20%, #9ef0f0 40%, #3ddbd9 60%, #08bdba 80%, #009d9a 100%);
}

// White Theme
#app.bx--white-theme .skill-bar-1 {
  background: linear-gradient(90deg, #1c0f30 0%, #081a1c 100%);
}

#app.bx--white-theme .skill-bar-2 {
  background: linear-gradient(90deg, #1c0f30 0%, #081a1c 50%, #022b30 100%);
}

#app.bx--white-theme .skill-bar-3 {
  background: linear-gradient(90deg, #1c0f30 0%, #081a1c 33%, #022b30 67%, #004144 100%);
}

#app.bx--white-theme .skill-bar-4 {
  background: linear-gradient(90deg, #1c0f30 0%, #081a1c 25%, #022b30 50%, #004144 75%, #005d5d 100%);
}

#app.bx--white-theme .skill-bar-5 {
  background: linear-gradient(90deg, #1c0f30 0%, #081a1c 20%, #022b30 40%, #004144 60%, #005d5d 80%, #007d79 100%);
}
</style>
