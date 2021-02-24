<template>
  <div class="stats">
    <h1>{{ $t('Stats.title') }}</h1>
    <p>{{ $t('Stats.describtion') }}</p>
    <div class="skill-group-wrapper" v-for="skillGroup in stats" :key="skillGroup.code">
      <SkillGroup :code="skillGroup.code" :skills="skillGroup.skills" />
    </div>
  </div>
</template>

<script>
import SkillGroup from '../components/SkillGroup'
import stats from '../assets/data/stats.json'

export default {
  name: 'stats',
  metaInfo() {
    return {
      title: `Tobias Hölzer - ${this.$t('App.stats')}`,
      meta: [{ name: 'description', content: this.$t('Stats.meta') }]
    }
  },
  components: { SkillGroup },
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
