<template>
  <div class="file-item">
    <cv-link class="file-icon file-link" :href="link" target="_blank">
      <FileIcon />
    </cv-link>
    <div class="file-info">
      <p>{{ date }}</p>
    </div>
    <div class="file-body">
      <h3 class="file-name">
        <a class="file-link" :href="link" target="_blank">{{ $t(`Files.${code}.name`) }}</a>
      </h3>
      <p>{{ $t(`Files.${code}.text`) }}</p>
    </div>
  </div>
</template>

<script>
import FileIcon from '@carbon/icons-vue/es/document/32'

export default {
  props: {
    name: String,
    code: String,
    preview: String,
    date: String,
    github: String,
    link: String,
    tags: Array
  },
  components: { FileIcon }
}
</script>

<style lang="scss">
.file-item::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 2px;
  content: '';
  background-color: $ui-02;
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
  border: 4px solid $ui-background;
}

.file-info {
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

.file-body {
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

.file-link {
  color: $text-01 !important;
  text-decoration: none;
}

.file-link img {
  width: 100%;
}

.file-link:hover {
  opacity: 0.5;
}

.file-name::after {
  content: '';
  display: block;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #4dc9e6, #210cac);
  -webkit-animation: colorWheel 60s infinite;
  animation: colorWheel 60s infinite;
}

.file-name {
  margin-bottom: 16px;
}

.file-tags {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 4px;
  margin-bottom: 4px;
}
</style>
