<template>
  <div
    class="main-content"
  >
    <div class="content__header">
      <h2 class="header-title">Step 1. Angle</h2>
      <div class="header-btns">
        <div class="btn"><h5 class="btn__text"> Cancel</h5></div>
        <div class="btn btn-border"><h5 class="btn__text"> Preview</h5></div>
      </div>
    </div>
      <div class="gallery">
      <SpaceImage
        v-for="item, index in fullData"
        :key="index"
        :image-item="item"
      />
    </div>
  </div>
</template>

<script>
  import { ref, computed } from 'vue'
  import dataset from '@/assets/DataSet/13639-Metadata.json'
  import axios from 'axios'
  import SpaceImage from '@/components/space-image'
  import { mapMutations } from 'vuex'

  export default {
    name: 'ChoosePicture',

    components: {
      SpaceImage,
    },
    setup() {

      return {
      }
    },
    data: () => ({
      width: 900,
      imageList:[],
      combinedList: [],
    }),
    computed: {
      fullData: function() {
        let newArray = []
        newArray = this.combinedList.slice()
        for (const combinedItem of newArray) {
          for (const imageGroup of this.imageList) {
            if (imageGroup.id === combinedItem.from_images)
            combinedItem.metadata = imageGroup.metadata
            combinedItem.image_b = imageGroup.image_b
            combinedItem.image_g = imageGroup.image_g
            combinedItem.image_r = imageGroup.image_r
          }
          // combinedItem.from_images
        }
        return newArray
      }
    },
    methods: {
      ...mapMutations([
        'saveFullData', // map `this.increment()` to `this.$store.commit('increment')`
      ]),

      getRequest(client) {
        this.getImageList(client)
        this.getCombinedList(client)
      },

      async getImageList(client) {
        this.imageList = await client.get('/rgb_list')
        this.imageList = this.imageList.data
      },

      async getCombinedList(client) {
        this.combinedList = await client.get('/combined_list')
        this.combinedList = this.combinedList.data
      },
    },
    mounted() {
      const url = 'https://junonian.earth/api'
      const client = axios.create({
        baseURL: url,
        timeout: 1000,
      });
      this.getRequest(client)
      this.saveFullData(this.fullData)
    }
  }
</script>

<style>
.main-content {
    /* width: 100%; */
    padding: 0 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content__header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 45px 0;
  }

  .header-title{
    font-weight: normal;
    font-size: 48px;
    line-height: 62px;
  }

  .header-btns{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn{
    border-radius: 16px;
    cursor: pointer;
  }

  .btn__text{
    margin: 18px 43px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
  }

  .btn-border{
    border: 1px solid #702DFF;
  }

  .content__header .btn-border {
    margin-left: 8px;
  }

  .slider-wrapped {

  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 40px;
  }

  .image {
    width: 600px;

  }

  @media (max-width:1399px)  {
    .gallery {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width:1000px)  {
    .gallery {
      grid-template-columns: 1fr;
    }
  }
</style>
