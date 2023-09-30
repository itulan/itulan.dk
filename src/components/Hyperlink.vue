<template>
  <a
    :class="{ button: asButton, pulse: pulse }"
    :href="url"
    :target="target"
    @click="handleClick"
    rel="noopener"
  >
    <slot></slot>
  </a>
</template> 

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
    },
    newTab: {
      type: Boolean,
      default: false,
    },
    asButton: {
      type: Boolean,
    },
    pulse: {
      type: Boolean,
    },
    onClick: {
      type: Function,
    },
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick();
      }
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
a {
  cursor: pointer;
}

.button {
  border: none;
  outline: none;
  color: #fff;
  background: var(--brand-secondary);
  position: relative;
  z-index: 0;
  display: inline-block;
  letter-spacing: 2px;
  padding: 17px 2.5rem 15px;
  text-transform: uppercase;
  font-family: Anton, Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  line-height: 26px;
  text-decoration: none;
}

/* https://codepen.io/althi/pen/eKdmaa */
.button:hover,
.button:focus {
  color: var(--brand-primary);
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

.pulse {
  box-shadow: 0 0 0 var(--brand-secondary);
  animation: pulse 2s infinite;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 var(--brand-secondary);
  }
  70% {
    -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 var(--brand-secondary);
    box-shadow: 0 0 0 0 var(--brand-secondary);
  }
  70% {
    -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }
}
</style>