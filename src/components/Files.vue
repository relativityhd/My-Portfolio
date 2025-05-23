<template>
  <div class="file-item">
    <cv-link class="file-icon file-link" :href="link" target="_blank" rel="noreferrer">
      <FileIcon />
    </cv-link>
    <div class="file-info">
      <p>{{ parsedDate }}</p>
    </div>
    <div class="file-body">
      <h3 class="file-name">
        <a class="file-link" :href="link" target="_blank" rel="noreferrer">
          {{ $t(`Files.${code}.name`) }}
          <LinkIcon class="link-icon" />
        </a>
      </h3>
      <p>{{ $t(`Files.${code}.text`) }}</p>
    </div>
  </div>
</template>

<script>
import { CvLink } from '@carbon/vue/src/components/cv-link'
import LinkIcon from '@carbon/icons-vue/es/launch/24'
import FileIcon from '@carbon/icons-vue/es/document/32'

export default {
  props: {
    code: String,
    preview: String,
    date: String,
    dateStart: String,
    link: String
  },
  components: { CvLink, LinkIcon, FileIcon },
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

.file-item::before {
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

.file-item {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  padding-bottom: 16px;
  margin-left: 16px;
}

.file-icon {
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
  border: 4px solid;
  border-color: $ui-background;

  -webkit-transition: background-color $theme-transition-time $theme-transition-type,
    border-color $theme-transition-time $theme-transition-type;
  -ms-transition: background-color $theme-transition-time $theme-transition-type,
    border-color $theme-transition-time $theme-transition-type;
  transition: background-color $theme-transition-time $theme-transition-type,
    border-color $theme-transition-time $theme-transition-type;
}

.file-info {
  position: relative;
  display: flex;
  height: 32px;
  margin: 16px;
  margin-top: -47px;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
  gap: 8px;
}

.file-body {
  z-index: 1;
  margin-top: -4px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}

.file-body::after {
  margin-top: 20px;
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background-color: $ui-04;

  -webkit-transition: background-color $theme-transition-time $theme-transition-type;
  -ms-transition: background-color $theme-transition-time $theme-transition-type;
  transition: background-color $theme-transition-time $theme-transition-type;
}

@media (min-width: 700px) {
  .file-body {
    margin-top: -52px;
  }
}

.file-link {
  color: $text-01 !important;
  text-decoration: none;

  -webkit-transition: color $theme-transition-time $theme-transition-type;
  -ms-transition: color $theme-transition-time $theme-transition-type;
  transition: color $theme-transition-time $theme-transition-type;
}

.file-link img {
  width: 100%;
}

.file-link:hover {
  opacity: 0.5;
}

@keyframes colorWheel180 {
  0% {
    filter: hue-rotate(180deg);
  }
  100% {
    filter: hue-rotate(540deg);
  }
}

.file-name::after {
  content: '';
  display: block;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #4dc9e6, #210cac);
  -webkit-animation: colorWheel180 60s infinite;
  animation: colorWheel180 60s infinite;
}

.file-name {
  margin-bottom: 16px;
}

.link-icon {
  opacity: 0.65;
}
</style>
