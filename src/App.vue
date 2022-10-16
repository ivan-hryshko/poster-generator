<template>
  <v-app>
    <v-main>
      <div class="layout">
        <div class="sidebar">
          <div class="sidebar__wrapper">

            <img class="sidebar__logo" src="@/assets/junonian-logo.png" @click="$router.push({path: '/'})">
  
            <div class="sidebar__items">
              <router-link to="/">
                <div
                  class="sidebar__item">
                  <div class="sidebar__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.84819 12.314V16.059" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10.7591 14.1867H6.93799" stroke="#808191" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M15.3661 12.428H15.259" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M17.1795 16.0026H17.0725" stroke="#808191" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M8.07227 2V2C8.07227 2.74048 8.68475 3.34076 9.44029 3.34076H10.4968C11.6624 3.34492 12.6065 4.27026 12.6118 5.41266V6.08771"
                        stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16.4283 21.9626C13.4231 22.0135 10.473 22.0114 7.57275 21.9626C4.3535 21.9626 2 19.6664 2 16.5113V11.8617C2 8.70661 4.3535 6.41038 7.57275 6.41038C10.4889 6.36053 13.4411 6.36157 16.4283 6.41038C19.6476 6.41038 22 8.70764 22 11.8617V16.5113C22 19.6664 19.6476 21.9626 16.4283 21.9626Z"
                        stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div class="sidebar__text">
                    Posters
                  </div>
                </div>
              </router-link>
              <div class="sidebar__item">
                <div class="sidebar__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.24463 14.7815L10.2378 10.8913L13.652 13.5732L16.581 9.79291" stroke="#808191" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                    <circle cx="19.9954" cy="4.20023" r="1.9222" stroke="#808191" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path
                      d="M14.9243 3.12013H7.65655C4.64511 3.12013 2.77783 5.25286 2.77783 8.2643V16.3467C2.77783 19.3581 4.6085 21.4817 7.65655 21.4817H16.2607C19.2721 21.4817 21.1394 19.3581 21.1394 16.3467V9.30778"
                      stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div class="sidebar__text">
                  About
                </div>
              </div>
              <div class="sidebar__item">
                <div class="sidebar__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11.5788" cy="6.77803" r="4.77803" stroke="#808191" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.00002 18.2014C3.99873 17.8655 4.07385 17.5337 4.2197 17.2311C4.67736 16.3158 5.96798 15.8307 7.03892 15.611C7.81128 15.4462 8.59431 15.336 9.38217 15.2815C10.8408 15.1533 12.3079 15.1533 13.7666 15.2815C14.5544 15.3367 15.3374 15.4468 16.1099 15.611C17.1808 15.8307 18.4714 16.27 18.9291 17.2311C19.2224 17.8479 19.2224 18.564 18.9291 19.1808C18.4714 20.1419 17.1808 20.5812 16.1099 20.7918C15.3384 20.9634 14.5551 21.0766 13.7666 21.1304C12.5794 21.2311 11.3866 21.2494 10.1968 21.1854C9.92221 21.1854 9.65677 21.1854 9.38217 21.1304C8.59663 21.0773 7.81632 20.9641 7.04807 20.7918C5.96798 20.5812 4.68652 20.1419 4.2197 19.1808C4.0746 18.8747 3.99955 18.5401 4.00002 18.2014Z"
                      stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div class="sidebar__text">
                  NASA Photo
                </div>
              </div>
              <div class="divider" style="width: 127px"></div>
            </div>
          </div>

          <footer class="sidebar__footer">

            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_118_188)">
                <path opacity="0.3"
                  d="M11.2001 15.7156C7.6001 12.0156 7.0001 6.41564 9.6001 2.21564C7.6001 2.61564 5.7001 3.61564 4.2001 5.21564C-0.0999024 9.51564 -0.0999024 16.5156 4.2001 20.8156C8.5001 25.1156 15.5001 25.1156 19.8001 20.8156C20.4001 20.2156 21.0001 19.5156 21.4001 18.8156C17.8001 19.4156 14.0001 18.4156 11.2001 15.7156Z"
                  stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path opacity="0.3"
                  d="M22 10.9156C20.6 9.51565 17.4 9.51565 16 10.9156C17.4 9.51565 17.4 6.31565 16 4.91565C17.4 6.31565 20.6 6.31565 22 4.91565C20.6 6.31565 20.6 9.51565 22 10.9156Z"
                  stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_118_188">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.915649)" />
                </clipPath>
              </defs>
            </svg>

            <svg class="switch-button" width="64" height="25" viewBox="0 0 64 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.915649" width="64" height="24" rx="12" fill="#F0F3F6" fill-opacity="0.1" />
              <path
                d="M48 5.91565C48 4.25879 49.3431 2.91565 51 2.91565C52.6569 2.91565 54 4.2588 54 5.91565V19.9156C54 21.5725 52.6569 22.9156 51 22.9156C49.3431 22.9156 48 21.5725 48 19.9156V5.91565Z"
                fill="#3F8CFF" />
            </svg>

            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1.91565V14.9156" stroke="#808191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17 8.91565L11 14.9156L5 8.91565" stroke="#808191" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M21 19.9156H1" stroke="#808191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </footer>
        </div>
        <div class="main-part">
          <header class="header">
            <div class="header__download-item">
              <img src="@/assets/icons/download-icon.svg" class="download-item__icon">
              <h3 class="download-item__text">Download</h3>
            </div>
            <!-- <h2 class="header__poster-size">Poster А2 42x59.4 sm</h2> -->
            <div class="header__notifications">
              <div class="notifications__box">
                <img src="@/assets/icons/notification.svg">
                <div class="notifications__counter">
                  <h5 class="counter-number">2</h5>
                </div>
              </div>
              <img src="@/assets/nasa-logo.png" class="notifications__icon">
            </div>
          </header>
          <main>
            <router-view/>
          </main>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
// import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'App',
  data: () => ({
    //
  }),
  setup() {
    // const router = useRouter()
    // const route = useRoute()
  }
};
</script>

<style>
@font-face {
  font-family: "TTFirsNeue";
  src: url("./fonts/TTFirsNeue/TTFirsNeue-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "TTFirsNeue";
  src: url("./fonts/TTFirsNeue/TTFirsNeue-Light.ttf") format("truetype");
  font-weight: light;
  font-style: normal;
}

@font-face {
  font-family: "TTFirsNeue";
  src: url("./fonts/TTFirsNeue/TTFirsNeue-Medium.ttf") format("truetype");
  font-weight: medium;
  font-style: normal;
}

@font-face {
  font-family: "TTFirsNeue";
  src: url("./fonts/TTFirsNeue/TTFirsNeue-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: 'TTFirsNeue';
}

.layout {
    width: 100%;
    display: flex;
    background-color: #1E1E1E;
    height: 100%;
    color: white;

  }

  .sidebar {
    width: 256px;
    box-shadow: inset -1px 0px 0px rgba(228, 228, 228, 0.1);
    color: #808191;
  }

  .sidebar__wrapper{
    position: fixed;
  }

  .sidebar__logo {
    width: 127px;
    margin-top: 44px;
    margin-left: 37px;
    cursor: pointer;
  }

  .sidebar__items {
    display: flex;
    flex-direction: column;
    margin-top: 78px;
    margin-left: 40px;
  }

  .sidebar__item {
    display: flex;
    margin-bottom: 20px;
  }

  .sidebar__item:hover{
    cursor: pointer;
  }

  .sidebar__item:hover .sidebar__text{
    color: white;
    
  }

  .sidebar__item:hover path{
    stroke: white;
  }

  .sidebar__item:hover circle{
    stroke: white;
  }

  .sidebar__icon {

  }

  .sidebar__text {
    margin-left: 18px;
    font-weight: 600;
    padding-top: 3px;
    color: #808191;
    font-size: 14px;
    line-height: 20px;
  }

  .divider {
    height: 1px;
    background: #E4E4E4;
    opacity: 0.1;
  }

  .sidebar__footer{
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: inset 0px 1px 0px rgba(228, 228, 228, 0.1);
    width: 256px;
    padding: 24px 40px;
    display: flex;
    justify-content: space-between;
  }

  .switch-button:hover rect{
    fill-opacity: .2;
    cursor: pointer;
    transition: all .3s;
  }

  .main-part {
    display: flex;
    flex-direction: column;
    width: calc(100% - 256px);
  }

  .header{
    height: 72px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 64px;
    box-shadow: inset 0px -1px 0px rgba(228, 228, 228, 0.1);
  }

  .header__download-item{
    display: flex;
  }

  .download-item__text{
    margin-left: 16px;
    font-weight: 600;
    font-size: 14px;
    color: #808191;
  }

  .header__poster-size{
    font-weight: 500;
    font-size: 18px;
  }

  .header__notifications{
    display: flex;
    align-items: center;
  }

  .notifications__box{
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 64px;
    position: relative;
  }

  .notifications__counter{
    width: 16px;
    height: 16px;
    background: linear-gradient(0deg, #FF544D 0%, #FF754C 100%);
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
  }

  .counter-number{
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    align-items: center;
    line-height: 16px;
  }

  .notifications__icon{
    height: 55px;
  }

  main{
    width: 100%;
  }

  router-link {
    color:white;
  }
</style>
