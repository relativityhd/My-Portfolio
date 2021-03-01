<template>
  <div v-if="!$store.state.isMobile">
    <cv-modal ref="mobileModal" :close-aria-label="$t('close-aria-label')" size="small">
      <template slot="label">{{ $t('qr-code.label') }}</template>
      <template slot="title">{{ $t('qr-code.title') }}</template>
      <template slot="content">
        <p>{{ $t('qr-code.body') }}</p>
        <br />
        <img width="256" height="256" src="../assets/images/qr-code.png" :alt="$t('qr-code.alt')" />
      </template>
    </cv-modal>
    <cv-button kind="secondary" @click="openQRModal" :icon="MobileIcon">
      {{ $t('show-mobile') }}
    </cv-button>
  </div>
</template>

<script>
import { CvModal } from '@carbon/vue/src/components/cv-modal'
import { CvButton } from '@carbon/vue/src/components/cv-button'
import MobileIcon from '@carbon/icons-vue/es/mobile--download/32'

export default {
  name: 'OpenModal',
  components: { CvModal, CvButton },
  data() {
    return {
      MobileIcon
    }
  },
  methods: {
    openQRModal() {
      this.$refs.mobileModal.show()
    }
  }
}
</script>
