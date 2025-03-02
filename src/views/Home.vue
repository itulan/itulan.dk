<template>
  <header class="home header container">
    <div class="content">
      <h1 class="main-title" data-aos="fade-right" data-aos-delay="100"> 
        <!-- date goes here  -->
        28th - 30th March
        </h1>  
      <h2
        data-aos="fade-left"
        data-aos-delay="150"
        id="season"
      >
      <!-- Season -->
        ITULAN Spring
      </h2>
       <Sponsors data-aos="fade-right" data-aos-delay="200" /> 
         <div class="button-container">
        <!--  <hyperlink
          data-aos="fade-down"
          data-aos-delay="250"
          asButton
          pulse
          :onClick="() => $router.push({ path: 'Meet n\' Greet' })"
          >Meet n' greet
          </Hyperlink> -->
         <Hyperlink
          data-aos="fade-down"
          data-aos-delay="250"
          asButton
          pulse
          :onClick="() => $router.push({ path: 'tickets' })"
          >Buy tickets
          </Hyperlink
        >

        <Hyperlink
          data-aos="fade-down"
          data-aos-delay="350"
          asButton
          pulse
          :onClick="() => $router.push({ path: 'tournaments' })"
          >Tournaments</Hyperlink
        > 
        <!-- <Hyperlink
          data-aos="fade-down"
          data-aos-delay="450"
          asButton
          pulse
          :onClick="() => $router.push({ path: 'schedule' })"
          >Schedule</Hyperlink
        >  -->
      </div>
    </div>
  </header>
</template>

<script>
import Sponsors from "@/components/Sponsors.vue";
import Hyperlink from "@/components/Hyperlink.vue"
export default {
  name: "Home",
  components: {
    Sponsors,
    Hyperlink
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
  text-align: center;
}

.header {
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-image: url(../assets/img/home/home_background_honeycomb_compressed.jpg);
  isolation: isolate;
  object-fit: cover;
  background-size: cover;
  min-height: 100vh;
}

.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--brand-white);
}


@media only screen and (max-width: 750px) {
  .content {
    padding-top: 4rem;
  }

  .header {
    height: initial;
    align-items: flex-end;
  }
}

@media only screen and (max-height: 850px) {
  .header {
    height: initial;
    align-items: flex-end;
  }
}

.content > * {
  max-width: 800px;
}

.header > *:not(:first-child) {
  margin-top: 20px;
}

.button-container {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
}

@media only screen and (max-width: 600px) {
  .button-container {
    flex-direction: column;
  }

  #season {
    font-size: 1.6rem;
    font-weight: bold;
  }
}

.button-container > button,
.button-container > a {
  display: block;
  margin: 15px auto;
  margin: 1rem;
}

#season {
  margin-top: 0;
  font-family: "Retro Gaming";
}

h2 {
  margin-top: 2rem;
}

#emoji {
  font-size: 8rem;
  margin-top: 2rem;
} 

</style>
