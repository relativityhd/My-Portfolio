<template>
  <div class="home">
    <div class="filter">
      <cv-checkbox label="Show files" value="showFiles" v-model="filter.showFiles"> </cv-checkbox>
      <cv-checkbox label="Show projects" value="showProjects" v-model="filter.showProjects"> </cv-checkbox>
      <cv-checkbox label="Only important" value="showOnlyImportant" v-model="filter.showOnlyImportant"> </cv-checkbox>
    </div>
    <div class="gallery">
      <div v-for="i in filteredItems" :key="i.name">
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
      items,
      filter: {
        showFiles: true,
        showProjects: true,
        showOnlyImportant: false
      }
    }
  },
  computed: {
    filteredItems: function() {
      return this.items.filter(i => {
        return (
          ((i.type === 'file' && this.filter.showFiles) || (i.type === 'project' && this.filter.showProjects)) &&
          ((this.filter.showOnlyImportant && i.important) || !this.filter.showOnlyImportant)
        )
      })
    }
  }
}
</script>

<style lang="scss">
.filter {
  width: 98%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.filter div {
  max-width: 180px;
}

.gallery {
  width: 98%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
</style>
