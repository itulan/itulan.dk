<template>
  <div>
    <div class="title-wrapper">
      <h1>{{ $route.name }}</h1>
    </div>

    <!-- Iterate over the list of sponsors -->
    <div
      v-for="sponsor in sponsors"
      :key="sponsor.id || sponsor.name"
      class="content"
    >
      <img
        class="logo"
        :alt="sponsor.name"
        :src="sponsor.logo"
        loading="lazy"
      />

      <div class="text">
        <p>{{ sponsor.text }}</p>

        <p>
          Interested? Please take a look at their
          <a
            :href="sponsor.website"
            target="_blank"
            rel="noopener noreferrer"
          >
            website
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import sponsorsData from "@/plugins/i18n/locale/en-US/modules/sponsorPage.js";

export default {
  name: "SponsorView",
  data() {
    return {
      sponsors: sponsorsData,
    };
  },
};
</script>

<style scoped>
.title-wrapper {
  margin-bottom: 5rem;
  text-align: center;
}

.content {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  box-sizing: border-box;
}

.logo {
  display: block;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 2rem 30px;
  box-sizing: border-box;
}

#text {
  padding: 0 30px;
  text-align: center;
  box-sizing: border-box;
}

@media only screen and (max-width: 750px) {
  .title-wrapper {
    margin-bottom: 1rem;
  }

  .logo {
    padding: 1rem 0;
  }

  #text {
    padding: 0;
  }
}
</style>
