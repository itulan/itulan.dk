<template>
    <div>
      <div class="title-wrapper">
        <h1>{{ $route.name }}</h1>
        <h2>{{$t("sponsorPage.sponsor")}}</h2>
      </div>
      <img
          alt="Accenture"
          class="logo primary"
          src="../assets/img/common/sponsor_logos/accenture/Acc_Logo_White_Purple_RGB.png" 
          loading="lazy"
          style="width: 50%;padding: 2rem;"
        />

        <div id="text">
          <!-- <h3>{{ $t("spn.aboutUs") }}</h3> -->
          <p v-html="$t('sponsorPage.text')"></p>
          <br />
          <p>Interested? Please take a look on their 
          <a target="_blank" :href="$t('sponsorPage.website')">Website</a>


          </p>
          

      </div>
    </div>
  </template>
  

  <!-- <script>
import Hyperlink from "@/components/Hyperlink";
export default {
  components: {
     Hyperlink,
  },
};
</script> -->
  <style scoped>
  .title-wrapper {
    margin-bottom: 5rem;
  }
  
  h3 {
    margin-top: 0px;
    text-align: left;
  }
  
  .flex-wrapper {
    display: flex;
    margin-bottom: 3rem;
  }
  
  #text {
    text-align: left;
    letter-spacing: 0px;
    padding-left: 30px;
  }
  
  .flex-wrapper > div {
    padding: 0px 20px;
  }
  
  .flex-wrapper > #image {
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background-image: url("$t('sponserPage.logo')");
    width: 100%;
  }
  
  @media only screen and (max-width: 750px) {
    .title-wrapper {
      margin-bottom: 1rem;
    }
  
    .flex-wrapper {
      flex-direction: column-reverse;
    }
  
    .flex-wrapper > div {
      padding: 20px 0px;
    }
  
    .flex-wrapper > #image {
      width: initial;
      height: 300px;
    }
  
    #text {
      padding-left: initial;
    }
  }
  </style>
  




  