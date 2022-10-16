<template>
  <div
    class="space-image"
  >
    <div
      class="space-image__image-wrapped"
    >
      <img
        class="space-image__image"
        src="@/assets/ImageSet/JNCE_2022229_44C00074_V01-mapprojected.png"
      >
    </div>
    <div class="space-image__info">
      <div class="space-image__text">
        <div class="space-image__main-text">
          {{ mainText }}
        </div>
        <div class="space-image__second-text">
          {{ secondText }}

        </div>
      </div>
      <v-btn
        color="#702DFF"
      >
        <router-link to="/choose-color">
          Use
        </router-link>
      </v-btn>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SpaceImage',
  props: {
    mainText: {
      type: String,
      default: 'Europa — 13805',
    },
    secondText: {
      type: String,
      default: 'NASA / SwRI / MSSS',
    }
  },
  setup(props) {
    function HelloWorld() {
      this.router.push({name: 'choose-color'})
    }

    return {
      HelloWorld
    }
  },
}
</script>

<style>
@import './space-image';
</style>
