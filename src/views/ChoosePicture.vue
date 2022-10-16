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
    <div
      v-if="isRealData"
      class="gallery"
    >
      <SpaceImage
        v-for="item, index in fullData"
        :key="index"
        :image-item="item"
        :is-real-data="isRealData"
      />
    </div>
    <div
      v-else
      class="gallery"
    >
      <SpaceImage
        v-for="item, index in fakeData"
        :key="index"
        :image-item="item"
        :is-real-data="isRealData"
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
      const imageList = ref([])
      const combinedList = ref([])
      const isRealData = ref(false)
      const fakeData = ref([])
      fakeData.value.push({
        image: 'https://www.missionjuno.swri.edu/Vault/VaultOutput?VaultID=44805&ts=1656511106',
        image_r: 'https://d2xkkdgjnsfvb0.cloudfront.net/Vault/Thumb?VaultID=44763&Interlaced=1&Mode=R&ResX=960&OutputFormat=jpg&Quality=90&ts=1656511106',
        image_g: 'https://d2xkkdgjnsfvb0.cloudfront.net/Vault/Thumb?VaultID=44665&Interlaced=1&Mode=R&ResX=960&OutputFormat=jpg&Quality=90&ts=1656511106',
        image_b: 'https://www.missionjuno.swri.edu/Vault/VaultOutput?VaultID=44805&ts=1656511106',
        metadata: dataset
      })

      for (let index = 0; index < 10; index++) {
        fakeData.value.push(fakeData.value[0])
      }

      console.log('fakeData.value :>> ', fakeData.value);


      // const url = 'http://localhost:8000/api/'
      // const url = 'https://www.random.org/'
      const url = 'http://44.206.255.237:8000/api'
      const client = axios.create({
        baseURL: url,
        timeout: 1000,
      });

      const fullData = computed(() => {
        let newArray = []
        newArray = combinedList.value.slice()
        for (const combinedItem of newArray) {
          for (const imageGroup of imageList.value) {
            if (imageGroup.id === combinedItem.from_images)
            combinedItem.metadata = imageGroup.metadata
            combinedItem.image_b = imageGroup.image_b
            combinedItem.image_g = imageGroup.image_g
            combinedItem.image_r = imageGroup.image_r
          }
          // combinedItem.from_images
        }
        console.log('newArray :>> ', newArray);
        return newArray
      })

      async function getImageList() {
        imageList.value = await client.get('/rgb_list')
        imageList.value = imageList.value.data
        console.log('imageList.value :>> ', imageList.value);
      }

      async function getCombinedList() {
        combinedList.value = await client.get('/combined_list')
        combinedList.value = combinedList.value.data
        console.log('combinedList.value :>> ', combinedList.value);
      }

      function getRrquest() {
        isRealData.value = true

        getImageList()
        getCombinedList()
      }

      // getRrquest()

      return {
        dataset,
        combinedList,
        fullData,
        isRealData,
        fakeData,
      }
    },
    data: () => ({
      width: 900,
    }),
    methods: {
      ...mapMutations([
        'saveFullData', // map `this.increment()` to `this.$store.commit('increment')`
      ]),
    },
    mounted() {
      this.saveFullData(this.fakeData)
      console.log('this.$store.state.fullDatas :>> ', this.$store.state.fullDatas);

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
