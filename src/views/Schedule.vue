<template>
  <div id="schedule" style="max-width: 1200px">
      <h1 class="title" data-aos="fade-up">Schedule</h1>
      <a class="TournamentLink" href="Tournaments">Sign up here</a>
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
    margin-bottom: 2rem;
}
.TournamentLink {
    margin-bottom: 2rem;
}
</style>