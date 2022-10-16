<template>
  <div class="poster-design-template__background">
    <div class="image-poster__design-template-wrapped image-poster__background">
      <img
        class="image-poster__image image-position"
        :src="chosenImage"
      >
      <div class="image-poster__template-top">
        <div class="image-poster__template-header">
          <h3 class="template-header__title">Europa</h3>
          <div class="template-header__info">
            <ul class="template-header__list">
              <li class="template-header__list-item">FOCAL_PLANE_TEMPERATURE": "{{ chosenData.metadata.FOCAL_PLANE_TEMPERATURE }}",</li>
              <li class="template-header__list-item">"IMAGE_TIME": "{{ chosenData.metadata.IMAGE_TIME }}",</li>
              <li class="template-header__list-item">"INSTRUMENT_HOST_NAME": "{{ chosenData.metadata.INSTRUMENT_HOST_NAME }}",</li>
              <li class="template-header__list-item">"INSTRUMENT_ID": "{{ chosenData.metadata.INSTRUMENT_ID }}"</li>
            </ul>
            <img src="@/assets/nasa-logo.png" class="template-header__logo">
          </div>
        </div>
      </div>
      <div class="image-poster__template-bottom">
        <div class="image-poster__template-footer">
          <div class="template-footer__info">
            <ul class="template-footer__list">
              <li class="template-footer__list-item">"COMPRESSION_TYPE": "{{ chosenData.metadata.COMPRESSION_TYPE }}",</li>
              <li class="template-footer__list-item">"DATA_SET_ID": "{{ chosenData.metadata.DATA_SET_ID }}",</li>
              <li class="template-footer__list-item">"DESCRIPTION": "{{ chosenData.metadata.DESCRIPTION }}",</li>
              <li class="template-footer__list-item">"EXPOSURE_DURATION": "{{ chosenData.metadata.EXPOSURE_DURATION }}",</li>
              <li class="template-footer__list-item">"FILE_NAME": "{{ chosenData.metadata.FILE_NAME }}",</li>
              <li class="template-footer__list-item">"FILE_RECORDS": {{ chosenData.metadata.FILE_RECORDS }},</li>
              <li class="template-footer__list-item">"FILTER_NAME": {{ chosenData.metadata.FILTER_NAME }}</li>
            </ul>
            <img src="@/assets/solar.png" class="template-footer__pic">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DesignTemplate1',
  props: {
    imagePath: {
      type: String,
      default: 'design-templates-2.png',
    },
  },
  computed: {
    ...mapGetters({
      chosenImage: 'getChosenImage',
      chosenData: 'getChosenData',
    })
  },
  setup(props) {
    return {
    }
  },
  mounted() {

  },
}
</script>

<style>
@import './design-template-1';
</style>
