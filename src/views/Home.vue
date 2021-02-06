<template>
  <div class="home">
    <div class="opener-wrapper">
      <div class="opener">
        <div class="opener-box">
          <h1>{{ $t('Home.title') }}</h1>
          <p>{{ $t('Home.welcome') }}</p>
          <div class="button-group">
            <cv-button type="primary" @click="openSettingsModal" :icon="FilterIcon">
              {{ $t('Home.filter.btn') }}
            </cv-button>
            <OpenMobile />
          </div>
          <cv-modal ref="settingsModal" class="settings-modale" :close-aria-label="$t('close-aria-label')" size="xs">
            <template slot="label">{{ $t('Home.filter.label') }}</template>
            <template slot="title">{{ $t('Home.filter.title') }}</template>
            <template slot="content">
              <div class="filter">
                <cv-checkbox
                  :label="$t('Home.filter.showProjects')"
                  value="showProjects"
                  v-model="filter.showProjects"
                ></cv-checkbox>
                <cv-checkbox :label="$t('Home.filter.showFiles')" value="showFiles" v-model="filter.showFiles">
                </cv-checkbox>
                <cv-checkbox :label="$t('Home.filter.showEvents')" value="showEvents" v-model="filter.showEvents">
                </cv-checkbox>
                <cv-checkbox
                  :label="$t('Home.filter.onlyImportant')"
                  value="showOnlyImportant"
                  v-model="filter.showOnlyImportant"
                ></cv-checkbox>
              </div>
            </template>
          </cv-modal>
        </div>
      </div>
    </div>

    <div class="gallery">
      <div v-for="i in filteredItems" :key="i.code">
        <Project
          v-if="i.type === 'project'"
          :code="i.code"
          :preview="i.preview"
          :date="i.date"
          :dateStart="i.dateStart"
          :github="i.github"
          :link="i.link"
          :tags="i.tags"
          :hostedAt="i.hostedAt"
          :isInternal="i.isInternal"
        />
        <File v-else-if="i.type === 'file'" :code="i.code" :date="i.date" :dateStart="i.dateStart" :link="i.link" />
        <Event v-else-if="i.type === 'event'" :code="i.code" :date="i.date" :link="i.link" />
      </div>
    </div>
  </div>
</template>

<script>
import OpenMobile from '../components/OpenMobile'
import File from '../components/Files'
import files from '../assets/data/files.json'
import Project from '../components/Projects'
import projects from '../assets/data/projects.json'
import Event from '../components/Events'
import events from '../assets/data/events.json'
import { CvCheckbox } from '@carbon/vue/src/components/cv-checkbox'
import { CvButton } from '@carbon/vue/src/components/cv-button'
import { CvModal } from '@carbon/vue/src/components/cv-modal'
import FilterIcon from '@carbon/icons-vue/es/filter--edit/32'

export default {
  name: 'Home',
  components: { CvCheckbox, CvButton, CvModal, OpenMobile, Project, File, Event },
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
      .concat(
        events.map(e => {
          e.type = 'event'
          return e
        })
      )
      .sort((a, b) => {
        const aTs = new Date(a.date).getTime()
        const bTs = new Date(b.date).getTime()
        if (typeof a.dateStart !== 'undefined' && typeof b.dateStart !== 'undefined' && aTs === bTs) {
          return new Date(b.dateStart).getTime() - new Date(a.dateStart).getTime()
        }
        return bTs - aTs
      })
    return {
      items,
      filter: {
        showFiles: true,
        showProjects: true,
        showEvents: true,
        showOnlyImportant: false
      },
      FilterIcon
    }
  },
  computed: {
    filteredItems: function() {
      return this.items.filter(i => {
        return (
          ((i.type === 'file' && this.filter.showFiles) ||
            (i.type === 'project' && this.filter.showProjects) ||
            (i.type === 'event' && this.filter.showEvents)) &&
          ((this.filter.showOnlyImportant && i.important) || !this.filter.showOnlyImportant)
        )
      })
    }
  },
  methods: {
    openSettingsModal() {
      this.$refs.settingsModal.show()
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/_theme.scss';

.opener-wrapper {
  width: 98%;
  max-width: 800px;
  margin: -24px auto 0;
}

.opener {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px 0 16px 20px;
  margin-left: 16px;
}

.opener::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 2px;
  content: '';
  background-color: $ui-02;
}

.opener-box {
  padding: 16px 32px;
}

.button-group {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
}

.filter {
  width: 98%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
