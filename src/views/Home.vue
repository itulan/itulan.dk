<template>
  <header class="home header container">
    <h1 data-aos-once="true" data-aos="fade-right" data-aos-delay="100">
      WE'VE RESPAWNED!
    </h1>
    <p data-aos-once="true" data-aos="fade-left" data-aos-delay="200">
      We're pleased to announce that ITU LAN is returning for the FALL 2021
      semester.
    </p>
    <h2
      data-aos-once="true"
      data-aos="fade-right"
      data-aos-delay="300"
      class="italic"
    >
      Stay tuned!
    </h2>

    <div class="button-container">
      <Hyperlink
        data-aos-once="true"
        data-aos="fade-left"
        data-aos-delay="400"
        asButton
        url="/join"
        >Join the crew?</Hyperlink
      >
      <Hyperlink
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-delay="500"
        asButton
        url="/partner"
        >Become partner</Hyperlink
      >
    </div>
  </header>
</template>

<script>
import Hyperlink from "@/components/Hyperlink.vue";
export default {
  name: "Home",
  components: {
    Hyperlink,
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: hsl(0, 0%, 100%);
  background-image: url(../assets/img/home/home_background.jpg);
  isolation: isolate;
  object-fit: cover;
  background-size: cover;
}

.header::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: hsla(216, 92%, 14%, 0.8);
}

.header > *:not(:first-child) {
  margin-top: 20px;
}

.button-container {
  margin-top: 40px;
}

.button-container > button,
.button-container > a {
  display: block;
  margin: 15px auto;
  width: 100%;
}
</style>
