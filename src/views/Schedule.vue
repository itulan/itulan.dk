<template>
  <div id="schedule">
      <h1 class="title" data-aos="fade-up">Schedule</h1>
      <schedule></schedule>
  </div>
</template>

<script>
import Schedule from "@/components/Schedule";
export default {
    components: {
        Schedule
    },
}
</script>

<style>
.title {
    margin-bottom: 4rem;
}
</style>