<template>
  <div class="skill">
    <h6 class="skill-name">{{ $t(`Stats.${group}.${code}`) }}</h6>
    <div class="skill-bar">
      <div :class="`skill-bar-${lvl}`"></div>
      <h6 class="skill-lvl">{{ lvl }}</h6>
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
  }
}
</script>

<style>
.skill {
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
}

.skill-name {
  width: 120px;
}

.skill-bar {
  width: calc(100% - 125px);
  display: flex;
  flex-direction: row;
  gap: 2px;
  min-width: calc(700px - 125px);
}

.skill-lvl {
  width: 10px;
}

@media (min-width: 700px) {
  .skill {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .skill-name {
    text-align: right;
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
  width: calc(20% - 12px);
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #f6f2ff 0%, #d9fbfb 100%);
}

.skill-bar-2 {
  width: calc(40% - 12px);
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #f6f2ff 0%, #d9fbfb 50%, #9ef0f0 100%);
}

.skill-bar-3 {
  width: calc(60% - 12px);
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #f6f2ff 0%, #d9fbfb 33%, #9ef0f0 67%, #3ddbd9 100%);
}

.skill-bar-4 {
  width: calc(80% - 12px);
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #f6f2ff 0%, #d9fbfb 25%, #9ef0f0 50%, #3ddbd9 75%, #08bdba 100%);
}

.skill-bar-5 {
  width: calc(100% - 12px);
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #f6f2ff 0%, #d9fbfb 20%, #9ef0f0 40%, #3ddbd9 60%, #08bdba 80%, #009d9a 100%);
}
</style>
