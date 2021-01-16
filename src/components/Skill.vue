<template>
  <div class="skill">
    <h3>{{ $t(`Stats.${group}.${code}`) }}</h3>
    <p>{{ lvl }}</p>
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
