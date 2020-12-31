<template>
  <div class="project-item">
    <div class="project-icon">
      <ProjectIcon />
    </div>
    <div class="project-info">
      <cv-link class="project-link" :href="link" target="_blank">
        <WebsiteIcon />
      </cv-link>
      <cv-link class="project-link" :href="github" target="_blank">
        <img
          src="../assets/images/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png"
          alt="Projects.github-alt"
          height="24"
          width="24"
        />
      </cv-link>
      <p>{{ date }}</p>
    </div>
    <div class="project-body">
      <a :href="link" target="_blank">
        <h1 class="project-name project-link">{{ $t(`Projects.${code}.name`) }}</h1>
      </a>

      <img :src="`./img/projects/${preview}`" :alt="$t(`Projects.${code}.alt`)" />
      <p>{{ $t(`Projects.${code}.text`) }}</p>
    </div>
  </div>
</template>

<script>
import ProjectIcon from '@carbon/icons-vue/es/roadmap/32'
import WebsiteIcon from '@carbon/icons-vue/es/link/32'

export default {
  props: {
    name: String,
    code: String,
    preview: String,
    date: String,
    github: String,
    link: String
  },
  components: { ProjectIcon, WebsiteIcon }
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
  justify-content: flex-start;
  flex-shrink: 0;
  gap: 8px;
}

.project-body {
  margin-top: 4px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}

@keyframes colorWheel {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

.project-link {
  color: $text-01 !important;
  text-decoration: none;
}

.project-name::after {
  content: '';
  display: block;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #4dc9e6, #210cac);
  -webkit-animation: colorWheel 60s infinite;
  animation: colorWheel 60s infinite;
}

.project-name {
  margin-bottom: 16px;
}
</style>
