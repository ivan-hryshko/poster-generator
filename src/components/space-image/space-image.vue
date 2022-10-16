<template>
  <div
    class="space-image"
  >
    <div
      class="space-image__image-wrapped"
    >
      <img
        class="space-image__image"
        :src="imageItem.image"
      >
      <!-- <img
        v-else
        class="space-image__image"
        :src="require(`@/assets/ImageSet/${imageItem.image}`)"
      > -->
    </div>
    <div class="space-image__info"
    >
      <div class="space-image__text">
        <div class="space-image__main-text">
          {{ imageItem.metadata.TARGET_NAME }}
        </div>
        <div class="space-image__second-text">
          {{ secondText }}
        </div>
      </div>
        <div
          class="space-image__button"
          @click="choseImage"
        >
          Use
        </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

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
    },
    imageItem: {
      type: Object,
      default: () => {
        return {}
      },
    },
    fakeData: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup(props) {
    function HelloWorld() {
      this.$router.push({name: 'choose-color'})
    }

    return {
      HelloWorld
    }
  },
  methods: {
    ...mapMutations([
      'setChosenData', // map `this.increment()` to `this.$store.commit('increment')`
    ]),
    choseImage() {
      this.setChosenData(this.imageItem)
      this.$router.push({path: '/choose-color'})
    },
  },
}
</script>

<style>
@import './space-image';
</style>
