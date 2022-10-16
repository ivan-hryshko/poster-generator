<template>
  <div
    class="main-content"
  >
    <div class="content__header">
      <h2 class="header-title">Step 2. Color</h2>
      <div class="header-btns">
        <router-link to="/" >
          <div class="link-button">
            Back
          </div>
        </router-link>
        <router-link to="/choose-meta-data">
          <div class="link-button btn-background">
            Next
          </div>
        </router-link>
      </div>
    </div>
    <div class="choose-colors">
      <div class="choose-colors__text">
        Choose color
      </div>
      <div class="choose-colors__colors">
        <div class="choose-colors__colors-rgb">
          <div class="color__wrapped">
            <div
              v-if="colors.isActiveRed"
              class="color__circle--active"
              style="background: #FF0000; border-color: #FF0000;"
              @click="changeActive('red')"
            >
              <div class="color__circle-point" />
            </div>
            <div
              v-else
              class="color__circle"
              style="border-color: #FF0000;"
              @click="changeActive('red')"
            />
            <div class="color__text">
              Red
            </div>
          </div>
          <div class="color__wrapped">
            <div
              v-if="colors.isActiveGreen"
              class="color__circle--active"
              style="background: #42FF00; border-color: #42FF00;"
              @click="changeActive('green')"
            >
              <div class="color__circle-point" />
            </div>
            <div
              v-else
              class="color__circle"
              style="border-color: #42FF00;"
              @click="changeActive('green')"
            />
            <div class="color__text">
                Green
            </div>
          </div>
          <div class="color__wrapped">
            <div
              v-if="colors.isActiveBlue"
              class="color__circle--active"
              style="background: #000AFF; border-color: #000AFF;"
              @click="changeActive('blue')"
            >
              <div class="color__circle-point" />
            </div>
            <div
              v-else
              class="color__circle"
              style="border-color: #000AFF;"
              @click="changeActive('blue')"
            />
            <div class="color__text">
              Blue
            </div>
          </div>
        </div>
        <div class="choose-colors__color-normal">
          <div class="color__wrapped">
            <div
              v-if="colors.isActiveNormal"
              class="color__circle--active"
              style="background: #FFFFFF;"
              @click="changeActive('white')"
            >
              <div class="color__circle-point" />
            </div>
            <div
              v-else
              class="color__circle"
              @click="changeActive('white')"
            >
            </div>
            <div class="color__text">
              Normal
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="image-poster">
      <div class="image-poster__image-wrapped">
        <img
          class="image-poster__image"
          :src="imagePath"
        >
      </div>

    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { mapMutations } from 'vuex'

  export default {
    name: 'ChooseColor',
    components: {
    },
    setup() {
      // console.log('this.$route.params :>> ', this.$route.query);

      return {
      }
    },
    data: () => ({
      colors: {
        isActiveRed: false,
        isActiveGreen: false,
        isActiveBlue: false,
        isActiveNormal: true,
      },
      imagePath: 'https://www.missionjuno.swri.edu/Vault/VaultOutput?VaultID=44805&ts=1656511106',
    }),
    computed: {
      chosenData () {
        return this.$store.state.chosenData
      }
    },
    methods: {
      ...mapMutations([
        'setChosenImage', // map `this.increment()` to `this.$store.commit('increment')`
      ]),
      changeActive(color) {
        for (const key in this.colors) {
          this.colors[key] = false
        }

        if (color === 'blue') {
          this.colors.isActiveBlue = true
          this.imagePath = this.chosenData.image_b
          this.setChosenImage(this.chosenData.image_b)
        }
        if (color === 'red') {
          this.colors.isActiveRed = true
          this.imagePath = this.chosenData.image_r
          this.setChosenImage(this.chosenData.image_r)
        }
        if (color === 'green') {
          this.colors.isActiveGreen = true
          this.imagePath = this.chosenData.image_g
          this.setChosenImage(this.chosenData.image_g)
        }
        if (color === 'white') {
          this.colors.isActiveNormal = true
          this.imagePath = this.chosenData.image
          this.setChosenImage(this.chosenData.image)
        }
      }

    },
    mounted() {
      // console.log('this.$route.query :>> ', this.$route.query);
      console.log('this.$store.state.stateHello :>> ', this.$store.state.helloState);
      this.setChosenImage(this.chosenData.image)
    },
  }
</script>

<style>
.btn-background {
    border: 1px solid #702DFF;
    background-color: #702DFF;
    margin-left: 8px;
    cursor: pointer;
  }

  .btn-background:link {
    border: 1px solid #702DFF;
    background-color: #702DFF;
  }

  .btn-background:visited {
    border: 1px solid #702DFF;
    background-color: #702DFF;
  }

  .btn-background:hover {
    border: 1px solid #5c2bc6;
    background-color: #5c2bc6;
    transition: all .3s;
  }

  .btn-background:active {
    border: 1px solid #702DFF;
    background-color: #702DFF;
  }

  .link-button{
    color: white;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    padding: 18px 43px;
    border-radius: 16px;
  }

  .v-application a{
    color: white !important;
  }

  a:-webkit-any-link{
    text-decoration: none;
  }

  .choose-colors {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
  }

  .choose-colors__text {
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #808191;
  }

  .choose-colors__colors {
    display: flex;
  }

  .choose-colors__colors-rgb {
    display: flex;
    margin-right: 90px;

  }

  .choose-colors__color-normal {
    align-items: center;
  }

  .color__wrapped {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 26px;
  }

  .color__circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 14px;
    border: 1px solid;
    margin-bottom: 8px;
    cursor: pointer;
  }

  .color__circle--active {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 14px;
    border: 1px solid;
    margin-bottom: 8px;
    cursor: pointer;
  }

  .color__circle-point {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: #1F2128;
  }

  .color__text {

  }

  .image-poster {
    display: flex;
    justify-content: center;
    height: 690px;
    width: 490px;
    background: #000000;
    border-radius: 30px;
    border: 20px solid #242731;;
  }

  .image-poster__image-wrapped {
    margin-top: 114px;
  }

  .image-poster__image {
    width: 435px;
  }
</style>
