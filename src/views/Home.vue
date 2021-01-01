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
        :tags="p.tags"
      />
      <File
        v-for="f in files"
        :key="f.name"
        :name="f.name"
        :code="f.code"
        :date="f.date"
        :link="f.link"
        :tags="f.tags"
      />
    </div>
  </div>
</template>

<script>
import File from '../components/Files'
import files from '../assets/data/files.json'
import Project from '../components/Projects'
import projects from '../assets/data/projects.json'

export default {
  name: 'Home',
  components: { Project, File },
  data: () => {
    return {
      projects,
      files
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
