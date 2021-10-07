<template>
  <div>
    <span>
      <em>powered by</em>
    </span>
    <br />
    <Hyperlink newTab url="https://www.capgemini.com/dk-en/">
      <img
        alt="Capgemini logo"
        class="logo primary"
        src="../assets/img/common/sponsor_logos/capgemini/Capgemini_white.png"
        loading="lazy"
      />
    </Hyperlink>
    <div class="separator">partnered with</div>
    <Hyperlink newTab url="https://www.astralis.gg/">
      <img
        alt="Astralis logo"
        class="logo secondary"
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
.logo {
  z-index: 10;
}

.logo.primary {
  width: 600px;
}

.logo.secondary {
  width: 300px;
}

.separator {
  font-weight: 700;
  font-style: italic;
}

@media only screen and (max-width: 600px) {
  .logo.primary {
    width: 100%;
  }

  .logo.secondary {
    width: 50%;
  }
}
</style>