<template>
  <div class="stats">
    <h1>{{ $t('Stats.title') }}</h1>
    <p>{{ $t('Stats.describtion') }}</p>
    <cv-link href="https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect" target="_blank">{{
      $t('Stats.dunning-kruger')
    }}</cv-link>
    <div class="skill-group-wrapper" v-for="skillGroup in stats" :key="skillGroup.code">
      <SkillGroup :code="skillGroup.code" :skills="skillGroup.skills" />
    </div>
  </div>
</template>

<script>
import { CvLink } from '@carbon/vue/src/components/cv-link'
import SkillGroup from '../components/SkillGroup'
import stats from '../assets/data/stats.json'

export default {
  name: 'stats',
  components: { CvLink, SkillGroup },
  data: () => {
    return {
      stats
    }
  }
}
</script>

<style lang="scss">
.stats {
  width: 98%;
  max-width: 1000px;
  margin: 0 auto;
}
.skill-group-wrapper {
  margin-top: 20px;
}
</style>
