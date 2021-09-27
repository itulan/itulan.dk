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
.button {
  border: none;
  outline: none;
  color: #fff;
  background: hsl(var(--brand-secondary));
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

/* https://codepen.io/althi/pen/eKdmaa */
.button:hover,
.button:focus {
  color: hsl(var(--brand-primary));
  background-image: linear-gradient(
    to right,
    #e7484f,
    #e7484f 16.65%,
    #f68b1d 16.65%,
    #f68b1d 33.3%,
    #fced00 33.3%,
    #fced00 49.95%,
    #009e4f 49.95%,
    #009e4f 66.6%,
    #00aac3 66.6%,
    #00aac3 83.25%,
    #732982 83.25%,
    #732982 100%,
    #e7484f 100%
  );
  animation: slidebg 2s linear infinite;
}

@keyframes slidebg {
  to {
    background-position: 20vw;
  }
}
</style>