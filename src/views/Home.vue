<template>
  <div class="home">
    <div class="profile">
      <div class="profile-card">
        <img
          class="profile-pic"
          src="../assets/images/profile-pic.jpg"
          :alt="$t('Profile.profile-pic-alt')"
          height="200"
          width="200"
        />
        <div class="profile-info">
          <h1>Tobias Hölzer</h1>
          <h6>{{ $t('Profile.job') }}</h6>
          <hr />
          <p>{{ `${age} ${$t('Profile.age')} | ${$t('Profile.lives')}` }}</p>
          <p class="profile-emails">
            <a href="mailto:tobiashoelzer@hotmail.com">tobiashoelzer@hotmail.com</a> |
            <a href="mailto:tobias.hoelzer@awi.de">tobias.hoelzer@awi.de</a>
          </p>
          <div class="profile-social">
            <a href="https://github.com/relativityhd" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://de.linkedin.com/in/tobias-h%C3%B6lzer-281b72193" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      <div class="profile-about">
        <h3 class="profile-welcome">{{ $t('Profile.welcome') }}</h3>
      </div>
    </div>
    <div class="opener-wrapper">
      <div class="opener">
        <div class="opener-box">
          <h1>{{ $t('Home.title') }}</h1>
          <p>{{ $t('Home.welcome') }}</p>
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
import File from '../components/Files'
import files from '../assets/data/files.json'
import Project from '../components/Projects'
import projects from '../assets/data/projects.json'
import Event from '../components/Events'
import events from '../assets/data/events.json'
import FilterIcon from '@carbon/icons-vue/es/filter--edit/32'
import GitHubIcon from '@carbon/icons-vue/es/logo--github/32'
import LinkedInIcon from '@carbon/icons-vue/es/logo--linkedin/32'

export default {
  name: 'Home',
  metaInfo() {
    return {
      title: `Tobias Hölzer - ${this.$t('App.home')}`,
      meta: [{ name: 'description', content: this.$t('Home.welcome') }]
    }
  },
  components: {
    Project,
    File,
    Event,
    GitHubIcon,
    LinkedInIcon
  },
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
    var ageDifMs = Date.now() - new Date(2001, 6, 16).getTime()
    var ageDate = new Date(ageDifMs)
    return {
      items,
      filter: {
        showFiles: true,
        showProjects: true,
        showEvents: true,
        showOnlyImportant: false
      },
      FilterIcon,
      age: Math.abs(ageDate.getUTCFullYear() - 1970)
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
  background-color: $text-03;

  -webkit-transition: background-color $theme-transition-time $theme-transition-type;
  -ms-transition: background-color $theme-transition-time $theme-transition-type;
  transition: background-color $theme-transition-time $theme-transition-type;
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

.profile {
  width: 90%;
  max-width: 587px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.profile-about {
  margin-top: 50px;
  margin-bottom: 50px;
}

.profile-card {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.profile-info {
  min-width: 300px;
}

.profile-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-social {
  margin-top: 4px;
}

.profile-social a,
.profile-social a:visited,
.profile-emails a,
.profile-emails a:visited {
  color: $text-01 !important;

  -webkit-transition: color $theme-transition-time $theme-transition-type;
  -ms-transition: color $theme-transition-time $theme-transition-type;
  transition: color $theme-transition-time $theme-transition-type;
}

.profile-social a:hover,
.profile-emails a:hover {
  opacity: 0.5 !important;
}
</style>
