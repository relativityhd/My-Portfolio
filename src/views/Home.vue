<template>
  <div class="home">
    <div class="gallery">
      <div v-for="i in items" :key="i.name">
        <Project
          v-if="i.type === 'project'"
          :name="i.name"
          :code="i.code"
          :preview="i.preview"
          :date="i.date"
          :dateStart="i.dateStart"
          :github="i.github"
          :link="i.link"
          :tags="i.tags"
        />
        <File
          v-else-if="i.type === 'file'"
          :name="i.name"
          :code="i.code"
          :date="i.date"
          :dateStart="i.dateStart"
          :link="i.link"
          :tags="i.tags"
        />
      </div>
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
    const items = files
      .map(f => {
        f.type = 'file'
        return f
      })
      .concat(
        projects.map(p => {
          p.type = 'project'
          return p
        })
      )
      .sort((a, b) => {
        const aTs = +new Date(a.date)
        const bTs = +new Date(b.date)
        return aTs <= bTs
      })
    return {
      items
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
