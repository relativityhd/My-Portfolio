<template>
  <div class="project-item">
    <cv-link
      v-if="link && link !== 'not-active'"
      class="project-icon project-link"
      :href="link"
      target="_blank"
      rel="noreferrer"
    >
      <ProjectIcon />
    </cv-link>
    <div v-else class="project-icon">
      <ProjectIcon />
    </div>

    <div class="project-info">
      <p>{{ parsedDate }}</p>
      <cv-link v-if="github" class="project-link" :href="github" target="_blank" rel="noreferrer">
        <GitIcon />
      </cv-link>
    </div>
    <div class="project-body">
      <h1 v-if="link && link !== 'not-active'" class="project-name">
        <a class="project-link" :href="link" target="_blank" rel="noreferrer">
          {{ $t(`Projects.${code}.name`) }}
          <LinkIcon v-if="preview" class="link-icon" />
        </a>
      </h1>
      <h1 v-else class="project-name">
        {{ $t(`Projects.${code}.name`) }}
      </h1>

      <a
        v-if="preview && link && link !== 'not-active'"
        class="project-link"
        :href="link"
        target="_blank"
        rel="noreferrer"
      >
        <img :src="`./img/projects/${preview}`" :alt="$t(`Projects.${code}.alt`)" width="800" height="400" />
      </a>
      <div class="project-preview" v-else-if="preview">
        <img :src="`./img/projects/${preview}`" :alt="$t(`Projects.${code}.alt`)" width="800" height="400" />
      </div>

      <div class="project-tags">
        <cv-tag v-for="tag in tags" :key="tag" :label="tag" kind="gray"></cv-tag>
        <cv-tag v-if="hostedAt" :label="`${$t('Projects.hostedAt')} @ ${hostedAt}`" kind="cool-gray"></cv-tag>
        <cv-tag v-if="link === 'not-active'" :label="$t('Projects.notActive')" kind="warm-gray"></cv-tag>
        <cv-tooltip v-if="isInternal" alignment="center" direction="top" :tip="$t('Projects.internal')" />
      </div>
      <p>{{ $t(`Projects.${code}.text`) }}</p>
    </div>
  </div>
</template>

<script>
import { CvLink } from '@carbon/vue/src/components/cv-link'
import { CvTag } from '@carbon/vue/src/components/cv-tag'
import { CvTooltip } from '@carbon/vue/src/components/cv-tooltip'
import LinkIcon from '@carbon/icons-vue/es/launch/32'
import ProjectIcon from '@carbon/icons-vue/es/roadmap/32'
import GitIcon from '@carbon/icons-vue/es/logo--github/32'

export default {
  props: {
    code: String,
    preview: String,
    date: String,
    dateStart: String,
    github: String,
    link: String,
    tags: Array,
    hostedAt: String,
    isInternal: Boolean
  },
  components: { CvLink, CvTag, CvTooltip, LinkIcon, ProjectIcon, GitIcon },
  computed: {
    parsedDate: function() {
      let dDate = new Date(this.date)
      let dMonth = this.$t(`months[${dDate.getMonth()}]`)
      let dYear = dDate.getFullYear()

      if (this.dateStart) {
        let dDateStart = new Date(this.dateStart)
        let dMonthStart = this.$t(`months[${dDateStart.getMonth()}]`)
        let dYearStart = dDateStart.getFullYear()
        return `${dMonthStart} ${dYearStart} - ${dMonth} ${dYear}`
      }
      return `${dMonth} ${dYear}`
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/_theme.scss';

.project-item::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 2px;
  content: '';
  background-color: $text-03;
}

.project-item {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  padding-bottom: 16px;
  margin-left: 16px;
}

.project-icon {
  position: relative;
  z-index: 1;
  display: flex;
  width: 32px;
  height: 32px;
  margin: 16px;
  margin-left: -15px;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  flex-shrink: 0;
  background-color: $ui-background;
  border: 4px solid $ui-background;
}

.project-info {
  position: relative;
  z-index: 1;
  display: flex;
  height: 32px;
  margin: 16px;
  margin-top: -47px;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
  gap: 8px;
}

.project-body {
  margin-top: 4px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}

.project-body::after {
  margin-top: 20px;
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background-color: $ui-04;
}

.project-link {
  color: $text-01 !important;
  text-decoration: none;
}

.project-link img {
  width: 100%;
  height: auto;
}

.project-link:hover {
  opacity: 0.5;
}

@keyframes colorWheel90 {
  0% {
    filter: hue-rotate(90deg);
  }
  100% {
    filter: hue-rotate(450deg);
  }
}

.project-name::after {
  content: '';
  display: block;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #4dc9e6, #210cac);
  -webkit-animation: colorWheel90 60s infinite;
  animation: colorWheel90 60s infinite;
}

.project-name {
  margin-bottom: 16px;
}

.project-preview img {
  width: 100%;
}

.project-tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 4px;
  margin-bottom: 4px;
}

.link-icon {
  opacity: 0.65;
}
</style>
