<template>
  <div class="skill-group">
    <h1>{{ $t(`Stats.${code}.title`) }}</h1>
    <div class="skill-wrapper">
      <Skill v-for="skill in skills" :key="skill.code" :code="skill.code" :lvl="skill.lvl" :group="code" />
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
  }
}
</script>
