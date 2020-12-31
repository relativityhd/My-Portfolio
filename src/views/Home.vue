<template>
  <div class="home">
    <div class="gallery">
      <Project
        v-for="p in projects"
        :key="p.name"
        :name="p.name"
        :code="p.code"
        :preview="p.preview"
        :date="p.date"
        :github="p.github"
        :link="p.link"
        :text="p.text"
      />
    </div>
  </div>
</template>

<script>
import Project from '../components/Projects'
import projects from '../assets/data/projects.json'

export default {
  name: 'Home',
  components: { Project },
  data: () => {
    return {
      projects
    }
  }
}
</script>

<style lang="scss">
.gallery {
  width: 98%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
</style>
