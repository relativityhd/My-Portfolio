<template>
  <div v-if="!$store.state.isMobile">
    <cv-modal ref="mobileModal" :close-aria-label="$t('close-aria-label')" size="small">
      <template slot="label">Scan the QR Code</template>
      <template slot="title">Open on mobile</template>
      <template slot="content">
        <p>{{ $t('qr-code-modal') }}</p>
        <br />
        <img width="100%" src="../assets/images/qr-code.png" :alt="$t('qr-code-alt')" />
      </template>
    </cv-modal>
    <cv-button kind="ghost" @click="openQRModal">
      {{ $t('show-mobile') }}
    </cv-button>
  </div>
</template>

<script>
import { CvModal, CvButton } from '@carbon/vue'
export default {
  name: 'OpenModal',
  components: { CvModal, CvButton },
  methods: {
    openQRModal() {
      this.$refs.mobileModal.show()
    }
  }
}
</script>
