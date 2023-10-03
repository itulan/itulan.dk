<template>
  <BNavbar v-bind:class="{ open: isMobile && mobileNavOpen }" toggleable="xl">
    <RouterLink class="router-link" to="/" tabindex="1">
      <span @click="closeMenu" class="router-link-home">
        <img
          src="../assets/img/common/navbar_logo2.png"
          alt="ITU LAN logo"
          height="30px"
          width="auto"
          loading="lazy"
        />
      </span>
    </RouterLink>

    <button
      v-show="isMobile"
      @click="toggleOpen"
      target="nav-collapse"
      aria-label="Toggle navigation"
      aria-controls="nav-collapse"
      aria-expanded="false"
      :class="{ 'is-active': mobileNavOpen }"
      class="hamburger hamburger--collapse"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <BCollapse v-model="mobileNavOpen" id="nav-collapse" is-nav>
      <BNavbarNav>
        <li
          v-for="route in routes"
          :key="route.name"
          :class="[isMobile ? 'mobile' : 'desktop']"
          :id="`link-${route.meta.id}`"
        >
          <RouterLink class="router-link" :to="route.path">
            <span @click="toggleOpen" class="router-link-text">{{
              route.name
            }}</span>
          </RouterLink>
        </li>
      </BNavbarNav>

      <!-- Right aligned nav items -->
      <BNavbarNav class="some-buttons ml-auto">
        <BNavItem
          class="some-button"
          href="https://discord.gg/nSFXWQN"
          target="_blank"
          rel="noopener"
        >
          <img
            alt="Discord logo"
            src="../assets/img/common/socialmedia/discord_icon.svg"
            height="25px"
            loading="lazy"
          />
        </BNavItem>
        <BNavItem
          class="some-button"
          href="https://www.facebook.com/itulan"
          target="_blank"
          rel="noopener"
        >
          <img
            alt="Facebook logo"
            src="../assets/img/common/socialmedia/facebook_icon.svg"
            height="25px"
            loading="lazy"
          />
        </BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<script>
import { BNavbar, BCollapse, BNavbarNav, BNavItem } from "bootstrap-vue";

export default {
  components: {
    BNavbar,
    BCollapse,
    BNavbarNav,
    BNavItem,
  },
  data() {
    return {
      windowWidth: null,
      mobileNavOpen: false,
    };
  },
  methods: {
    toggleOpen() {
      if (this.isMobile) {
        this.mobileNavOpen = !this.mobileNavOpen;
      }
    },
    closeMenu() {
      this.mobileNavOpen = false;
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;

    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  computed: {
    isMobile() {
      return this.windowWidth < 1200;
    },
    routes() {
      let allRoutes = this.$router.options.routes;
      return allRoutes.filter((r) => {
        return r.name !== "home" && r.name !== undefined;
      });
    },
  },
};
</script>

<style scoped>
.navbar {
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

button {
  outline: none !important;
}

.navbar-dark .navbar-toggler {
  border: none !important;
}

.navbar-dark .navbar-toggler-icon {
  color: var(--brand-white) !important;
}

.navbar-toggler-icon {
  color: var(--brand-white) !important;
}

.bg-info {
  background-color: transparent !important;
}

.open {
  background-color: var(--brand-primary) !important;
  border-bottom: 4px solid white;
}

.some-button {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  margin: 0 5px;
}

.some-button img:hover {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  transform: scale(1.4);
}

.some-button:hover img {
  filter: invert(34%) sepia(90%) saturate(5228%) hue-rotate(276deg) brightness(98%) contrast(101%);
}

.navbar-brand {
  text-decoration: none !important;
}

.router-link {
  margin: 0 2rem;
  color: var(--brand-white);
  text-decoration: none;
}

.router-link :not(.router-link-home) {
  font-size: 14px;
}

.router-link-text {
  text-transform: uppercase;
  position: relative;
  font-family: "Retro Gaming";
}

.desktop .router-link-text:after,
.desktop .router-link-text:before {
  transition: all 0.2s;
}

/* stroke */
.desktop .router-link-text:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: ".";
  color: transparent;
  background: var(--brand-white);
  height: 2px;
}
.desktop .router-link-text:hover:after {
  /* width: 100%; */
}

.desktop .router-link-text:hover {
  color: var(--brand-secondary);
}

.router-link-home {
  font-family: Anton, Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
}

.router-link-active span:not(.router-link-home) {
  color: var(--brand-gray);
}

@media only screen and (max-width: 1200px) {
  .some-buttons {
    flex-direction: initial;
    justify-content: center;
  }

  .router-link-text {
    /* font-family: "Anton", Arial, Helvetica, sans-serif; */
    text-align: center;
    line-height: 0.5;
  }

  .router-link-active span {
    color: inherit !important;
  }

  .router-link :not(.router-link-home) {
    margin: 0 auto;
    font-size: 2.5rem;
    /* color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--brand-white); */
    letter-spacing: 4px;
    text-transform: uppercase;
    display: block;
  }
  .router-link:hover :not(.router-link-home) {
    color: var(--brand-secondary);
    font-style: italic;
    text-shadow: 4px 4px 0px #000000;
    -webkit-text-stroke-width: initial;
    -webkit-text-stroke-color: initial;
  }

  .router-link-active :not(.router-link-home) {
    color: initial;
    -webkit-text-stroke-width: initial;
    -webkit-text-stroke-color: initial;
  }

  .some-button {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
