<template>
  <div class="stats">
    <div class="skill-group-wrapper" v-for="skillGroup in stats" :key="skillGroup.code">
      <SkillGroup :code="skillGroup.code" :skills="skillGroup.skills" />
      <hr />
    </div>
  </div>
</template>

<script>
import SkillGroup from '../components/SkillGroup'
import stats from '../assets/data/stats.json'

export default {
  name: 'stats',
  components: { SkillGroup },
  data: () => {
    return {
      stats
    }
  }
}
</script>
