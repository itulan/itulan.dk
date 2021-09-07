<template>
  <div class="home">
    <header class="v-header container">
      <div class="fullscreen-background-wrap">
        <img
          alt="ITU LAN background"
          src="../assets/img/home/home_background.jpg"
          loading="lazy"
        />
      </div>
      <div class="header-overlay"></div>
      <div class="header-content text-md-center">
        <h1 data-aos-once="true" data-aos="fade-right" data-aos-delay="100">
          WE'RE BACK!
        </h1>
        <p>
          We're pleased to announce that ITU LAN is returning for the FALL 2021
          semester.
        </p>
        <!-- <h2
          data-aos-once="true"
          data-aos="fade-right"
          data-aos-delay="200"
          class="hollow-text"
        >
          {{ $t("home.date.season") }}
        </h2>
        <h2 data-aos-once="true" data-aos="fade-right" data-aos-delay="200">
          {{ $t("home.date.dayMonth") }}
        </h2> -->
        <h3>Meet and greet</h3>
        <p>
          Would you be interested in being a part of a fantastic family of LAN
          organizing people? Then come by and say <em>HI</em> and hear what we
          do before, under, and after LAN, on Tuesday, 7th of September 2021
          around 17.00 in room 2A20.
          <a href="https://www.facebook.com/events/1241576162960343"
            >Sign up here</a
          >
          (or just show up ¯\_(ツ)_/¯).
        </p>
        <div class="button-container">
          <a class="button" href="/join">Join the crew?</a>
          <a class="button" href="/partner">Partner with us?</a>
        </div>
      </div>
    </header>
    <div id="circle-container">
      <CircleBrand>Buy Ticket</CircleBrand>
    </div>
  </div>
</template>

<script>
import CircleBrand from "@/components/Circle.vue";

export default {
  components: {
    CircleBrand,
  },
};
</script>



<style scoped>
* {
  box-sizing: border-box;
}

.button-container {
  margin-top: 40px;
}

.button-container > button,
.button-container > a {
  display: block;
  margin: 10px auto;
  width: 100%;
}

.circsle {
  margin: 10px;
}

a:hover {
  color: inherit;
  text-decoration: none;
}

#logo {
  width: 400px;
}

.powered-by {
  display: block;
  font-style: italic;
  margin-bottom: 10px;
}

.v-header {
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
}

.container {
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
  text-align: center;
}

.fullscreen-background-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.fullscreen-background-wrap img {
  min-height: 100%;
  min-width: 100%;
}

.header-overlay {
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: hsla(216, 92%, 14%, 0.4);
}

.header-content {
  z-index: 2;
  padding: 3rem;
  max-width: 710px;
  background-color: hsla(216, 92%, 14%, 0.866);
}

.header-content h1,
.header-content h2 {
  margin-bottom: 0;
}

.header-content h1 {
  margin-top: 0;
}

#ticket-circle {
  position: absolute;
  right: 10%;
}

@media screen and (max-height: 800px) {
  #ticket-circle {
    top: 40%;
  }
}

@media only screen and (max-width: 600px) {
  .header-content {
    padding: 1.5rem;
  }

  #ticket-circle {
    right: 100%;
  }

  #logo {
    width: 100%;
  }
}

@media only screen and (max-width: 1200px) {
  #ticket-circle {
    right: 10%;
  }
}

@media only screen and (max-width: 1000px) {
  #ticket-circle {
    transform: scale(0.7);
    margin-top: 3rem;
  }
}

@media only screen and (max-width: 400px), screen and (max-height: 400px) {
  .header-content h1 {
    font-size: 3.5rem;
  }

  .header-content h2 {
    font-size: 2.5rem;
  }
}

@media only screen and (max-width: 400px) {
  .header-content {
    margin-top: 50px;
  }
}
</style>
