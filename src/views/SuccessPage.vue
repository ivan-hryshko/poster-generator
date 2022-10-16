<template>
<div
    class="main-content success-page"
  >
    <h3 class="success-title">The poster has been saved to your <br> computer and is ready to be printed</h3>
    <h4 class="success-subtitle">You can also share the poster on your social networks</h4>
    <div class="media-buttons">
      <div class="post__button">
        <img src="@/assets/icons/facebook.svg">
        <router-link class="post__text" to="/" >
          Post to facebook
        </router-link>
      </div>
      <div class="post__button">
        <img src="@/assets/icons/instagram.svg">
        <router-link class="post__text" to="/" >
          Post to instagram
        </router-link>
      </div>
      <div class="post__button">
        <img src="@/assets/icons/twitter.svg">
        <router-link class="post__text" to="/" >
          Post to twitter
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'PrintSetting',

    components: {
    },
    setup() {
      return {
      }
    },
    data: () => ({
    }),
  }
</script>

<style>
.success-page{
  height: calc(100vh - 112px);
  justify-content: center;
}

.success-title{
  font-weight: 500;
  font-size: 48px;
  line-height: 62px;
  text-align: center;
}

.success-subtitle{
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  color: #808191;
  padding: 23px 0 45px 0;
}

.media-buttons{
  display: flex;
  
}

.post__button{
  border: 1px solid #702DFF;
  border-radius: 16px;
  display: flex;
  padding: 18px 50px;
}

.post__button:hover{
  cursor: pointer;
  background-color: #702DFF;
  transition: all .3s;
}

.post__button:not(:last-child){
  margin-right: 25px;
}

.post__text{
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  padding-left: 30px;
}
</style>
