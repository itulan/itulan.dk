<template>
  <div class="accordion">
    <div @click.prevent="active = !active" class="tab-header">
      <small>{{ tournament.platform }}</small>
      <h3>{{ tournament.title }}</h3>
      <div class="sponsor" v-if="tournament.logoPath">
        <small>{{ $t("tournaments.by") }}</small>
        <img :src="getImgUrl" loading="lazy" alt="Sponsor logo" />
      </div>
    </div>
    <div class="details" v-show="active">
      <hr />
      <div>
        <!-- <p
          class="description"
          v-if="
            tournament.description &&
            (isMobile || tournament.title.startsWith('Escape Room'))
          "
          v-html="tournament.description"
        ></p> -->
        <p
          class="description"
          v-html="tournament.description"
        ></p>

        <a class="Toornamentbutton" 
        v-if="tournament.toornUrl" 
        target="_blank"
        :href="tournament.toornUrl">
        Sign Up >
        </a>
        <!-- <iframe
          v-if="tournament.widgetUrl"
          width="100%"
          height="640px"
          :src="tournament.widgetUrl"
          :title="'tournamet-wdiget-' + tournament.title"
        ></iframe> -->
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      windowWidth: null,
    };
  },
  props: ["tournament"],
  mounted() {
    this.windowWidth = window.innerWidth;

    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  computed: {
    isMobile() {
      return this.windowWidth < 670;
    },
    getImgUrl() {
      let path = require(`../assets/img/common/sponsor_logos/${this.tournament.logoPath}`);
      return path;
    },
  },
};
</script>

<style scoped>
.Toornamentbutton{
  text-decoration: none;
  /* background-color: #C329F0; */
  background-image: linear-gradient(to  right, #031d45 , #C329F0 55%);
  border-radius: 1rem;
  border-color: #27497a;
  border-style: solid;
  border-width: 2px;
  padding: 14px 35px;
}
.description {
  text-align: left;
}

.tab-header {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-header:hover {
  transition: all 0.2s;
  transform: scale(1.1);
  color: var(--brand-gray-light);
}

.details {
  margin-bottom: 10px;
}

h3 {
  margin-top: 0px;
  margin-bottom: 0px;
  letter-spacing: 2px;
  font-size: 3rem;
}
hr {
  background-color: var(--brand-white);
}

.sponsor small {
  display: block;
  margin-bottom: 5px;
}

.sponsor img {
  width: 200px;
}

@media only screen and (max-width: 650px) {
  h3 {
    font-size: 2rem;
  }
}
</style>