<template>
  <div class="skill-group">
    <h3 class="skill-group-name">{{ $t(`Stats.${code}.title`) }}</h3>
    <div class="skill-wrapper">
      <Skill v-for="skill in sortedSkills" :key="skill.code" :code="skill.code" :lvl="skill.lvl" :group="code" />
    </div>
  </div>
</template>

<script>
import Skill from './Skill'

export default {
  name: 'SkillGroup',
  components: { Skill },
  props: {
    code: String,
    skills: Array
  },
  computed: {
    sortedSkills: function() {
      return this.skills.slice(0).sort((a, b) => b.lvl - a.lvl)
    }
  }
}
</script>

<style lang="scss">
.skill-wrapper::after {
  margin-bottom: 20px;
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background-color: $ui-03;
}

.skill-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 0px;
}

.skill-group-name::after {
  content: '';
  display: block;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #4dc9e6, #210cac);
  -webkit-animation: colorWheel90 60s infinite;
  animation: colorWheel90 60s infinite;
}
</style>
