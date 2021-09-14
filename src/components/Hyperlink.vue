<template>
  <a :class="{ button: asButton }" :href="url" :target="target" rel="noopener">
    <slot></slot>
  </a>
</template> 

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    newTab: {
      type: Boolean,
      default: false,
    },
    asButton: {
      type: Boolean,
    },
  },
  computed: {
    target() {
      if (this.newTab) {
        return "_blank";
      } else {
        return "_self";
      }
    },
  },
};
</script>

<style scoped>
/* https://codepen.io/leandrosimoes/pen/VqZxaG */
.button {
  border: none;
  outline: none;
  color: #fff;
  background: hsl(var(--brand-primary));
  cursor: pointer;
  position: relative;
  z-index: 0;
  display: inline-block;
  letter-spacing: 2px;
  padding: 15px 2.5rem;
  text-transform: uppercase;
  font-family: Anton, Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  line-height: 26px;
  text-decoration: none;
}

.button::before:active {
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
}

.button:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.button:hover:before,
.button:focus:before {
  opacity: 1;
}

.button:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: hsl(var(--brand-secondary));
  left: 0;
  top: 0;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>