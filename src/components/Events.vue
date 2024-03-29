<template>
  <div class="event-item">
    <cv-link class="event-icon event-link" :href="link" target="_blank" rel="noreferrer">
      <EventIcon />
    </cv-link>
    <div class="event-info">
      <p>{{ parsedDate }}</p>
    </div>
    <div class="event-body">
      <h3 class="event-name">
        <a class="event-link" :href="link" target="_blank" rel="noreferrer">
          {{ $t(`Events.${code}.name`) }}
          <LinkIcon class="link-icon" />
        </a>
      </h3>
      <p>{{ $t(`Events.${code}.text`) }}</p>
    </div>
  </div>
</template>

<script>
import { CvLink } from '@carbon/vue/src/components/cv-link'
import LinkIcon from '@carbon/icons-vue/es/launch/24'
import EventIcon from '@carbon/icons-vue/es/star/32'

export default {
  props: {
    code: String,
    preview: String,
    date: String,
    link: String
  },
  components: { CvLink, LinkIcon, EventIcon },
  computed: {
    parsedDate() {
      let dDate = new Date(this.date)
      let dDay = dDate.getDate()
      let dMonth = this.$t(`months[${dDate.getMonth()}]`)
      let dYear = dDate.getFullYear()
      return `${dDay} ${dMonth} ${dYear}`
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/_theme.scss';

.event-item::before {
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

.event-item {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  padding-bottom: 16px;
  margin-left: 16px;
}

.event-icon {
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

.event-info {
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

.event-body {
  z-index: 1;
  margin-top: -4px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}

.event-body::after {
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
  .event-body {
    margin-top: -52px;
  }
}

.event-link {
  color: $text-01 !important;
  text-decoration: none;

  -webkit-transition: color $theme-transition-time $theme-transition-type;
  -ms-transition: color $theme-transition-time $theme-transition-type;
  transition: color $theme-transition-time $theme-transition-type;
}

.event-link img {
  width: 100%;
}

.event-link:hover {
  opacity: 0.5;
}

.event-name::after {
  content: '';
  display: block;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #4dc9e6, #210cac);
  -webkit-animation: colorWheel 60s infinite;
  animation: colorWheel 60s infinite;
}

.event-name {
  margin-bottom: 16px;
}

.link-icon {
  opacity: 0.65;
}
</style>
