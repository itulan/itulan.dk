<template>
  <div>
    <div class="title-wrapper">
      <h1>{{ $route.name }}</h1>
      <h2>{{ $t("sponsorPage.sponsor") }}</h2>
    </div>

    <div class="content">
      <img
        class="logo"
        :alt="$t('sponsorPage.sponsor')"
        :src="$t('sponsorPage.logo')"
        loading="lazy"
      />

      <div id="text">
        <p>{{ $t("sponsorPage.text") }}</p>

        <p>
          Interested? Please take a look at their
          <a
            :href="$t('sponsorPage.website')"
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
