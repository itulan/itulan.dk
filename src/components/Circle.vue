<template>
  <div class="circle-container">
    <div class="circle-outline">
      <div :style="styleCircle" class="circle">
        <span :style="styleMessage" class="message"><slot></slot></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    radius: {
      type: String,
      default: "200px",
    },
    fontSize: {
      type: String,
      default: "2rem",
    },
  },
  computed: {
    styleCircle() {
      return {
        width: this.radius,
        height: this.radius,
      };
    },
    styleMessage() {
      return {
        fontSize: this.fontSize,
      };
    },
  },
};
</script>

<style scoped>
.circle-container {
  display: flex;
  flex-direction: row;
  z-index: 9;
}

.circle {
  background-color: var(--brand-secondary);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

.circle:hover {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  transform: scale(1.27);
}

.circle-outline {
  border: 4px solid var(--brand-white);
  padding: 1.5rem;
  border-radius: 50%;
  display: block;
  animation: border-pulsate 2s infinite;
}

.circle-outline .message {
  text-transform: uppercase;
  font-family: Anton, Arial, Helvetica, sans-serif;
  display: block;
  margin: 0 auto;
  width: 70%;
  letter-spacing: 2px;
  text-align: center;
  line-height: 120%;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

@media only screen and (max-width: 600px) {
  .circle-outline {
    transform: scale(0.7);
  }
}

@keyframes border-pulsate {
  0% {
    border-color: var(--brand-white);
    outline-color: var(--brand-white);
  }

  50% {
    border-color: rgba(255, 255, 255, 0.34);
    outline-color: rgba(255, 255, 255, 0.34);
  }

  100% {
    border-color: var(--brand-white);
    outline-color: var(--brand-white);
  }
}
</style>
