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
    isRealData: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    function HelloWorld() {
      console.log('hello');
      this.$router.push({name: 'choose-color'})
    }

    // console.log('props.imagePath :>> ', props.imageItem);

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
      console.log('this.$store.state.chosenData :>> ', this.$store.state.chosenData);

    },
  },
}
</script>

<style>
@import './space-image';
</style>
