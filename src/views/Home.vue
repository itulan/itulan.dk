<template>
  <header class="home header container">
    <div class="content">
      <h1 data-aos="fade-right" data-aos-delay="100">29-31 OCTOBER</h1>
      <h1
        data-aos="fade-left"
        data-aos-delay="150"
        id="season"
        class="hollow-text"
      >
        FALL 2021
      </h1>
      <MainSponsor data-aos="fade-right" data-aos-delay="200" />
      <div class="button-container">
        <Hyperlink
          data-aos="fade-left"
          data-aos-delay="250"
          asButton
          pulse
          :onClick="() => $router.push({ path: 'tickets' })"
          >Buy tickets</Hyperlink
        >
      </div>
      <p data-aos="fade-right" data-aos-delay="300">
        The tickets are here! Grab your friends and secure your tickets before
        it is too late. If you have any questions, please refer to our
        <Hyperlink url="/faq">FAQ section</Hyperlink> or reach out to us on our
        SoMe channels.
      </p>
      <p data-aos="fade-left" data-aos-delay="350">
        Tournamets will be announced soon ...
      </p>
      <h2 data-aos="fade-right" data-aos-delay="700" class="italic">
        GO! GO! GO!
      </h2>
    </div>
  </header>
</template>

<script>
import Hyperlink from "@/components/Hyperlink";
import MainSponsor from "@/components/MainSponsorLogo";
export default {
  name: "Home",
  components: {
    Hyperlink,
    MainSponsor,
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
  background-image: url(../assets/img/home/home_background.jpg);
  isolation: isolate;
  object-fit: cover;
  background-size: cover;
}

.content {
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: hsl(0, 0%, 100%);
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

.content > * {
  max-width: 800px;
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

#season {
  margin-top: 0;
}
</style>
