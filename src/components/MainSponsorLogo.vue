<template>
  <div>
    <span>
      <em>powered by</em>
    </span>
    <br />
    <Hyperlink newTab url="https://www.capgemini.com/dk-en/">
      <img
        alt="Capgemini logo"
        id="logo"
        src="../assets/img/common/sponsor_logos/capgemini/Capgemini_white.png"
        loading="lazy"
      />
    </Hyperlink>
    <div class="separator">x</div>
    <Hyperlink newTab url="https://www.astralis.gg/">
      <img
        alt="Astralis logo"
        id="logo"
        src="../assets/img/common/sponsor_logos/astralis/Astralis-white.png"
        loading="lazy"
      />
    </Hyperlink>
  </div>
</template>

<script>
import Hyperlink from "@/components/Hyperlink";
export default {
  components: {
    Hyperlink,
  },
};
</script>

<style>
#logo {
  width: 400px;
  z-index: 10;
}

.separator {
  font-weight: 800;
  font-size: 2rem;
}

@media only screen and (max-width: 600px) {
  #logo {
    width: 100%;
  }
}
</style>