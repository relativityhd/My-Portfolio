<template>
  <div class="project-item">
    <cv-link class="project-icon project-link" :href="link" target="_blank">
      <ProjectIcon />
    </cv-link>
    <div class="project-info">
      <p>{{ dateStart ? `${$luxon(dateStart)} - ${$luxon(date)}` : $luxon(date) }}</p>
      <cv-link class="project-link" :href="github" target="_blank">
        <GitIcon />
      </cv-link>
    </div>
    <div class="project-body">
      <h1 class="project-name">
        <a class="project-link" :href="link" target="_blank">{{ $t(`Projects.${code}.name`) }}</a>
      </h1>
      <a class="project-link" :href="link" target="_blank">
        <img :src="`./img/projects/${preview}`" :alt="$t(`Projects.${code}.alt`)" />
      </a>
      <div class="project-tags">
        <cv-tag v-for="tag in tags" :key="tag" :label="tag" kind="gray"></cv-tag>
      </div>
      <p>{{ $t(`Projects.${code}.text`) }}</p>
    </div>
  </div>
</template>

<script>
import { CvLink, CvTag } from '@carbon/vue'
import ProjectIcon from '@carbon/icons-vue/es/roadmap/32'
import GitIcon from '@carbon/icons-vue/es/logo--github/32'

export default {
  props: {
    name: String,
    code: String,
    preview: String,
    date: String,
    dateStart: String,
    github: String,
    link: String,
    tags: Array
  },
  components: { CvLink, CvTag, ProjectIcon, GitIcon }
}
</script>

<style lang="scss">
.project-item::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 2px;
  content: '';
  background-color: $ui-02;
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

.project-link {
  color: $text-01 !important;
  text-decoration: none;
}

.project-link img {
  width: 100%;
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
</style>
