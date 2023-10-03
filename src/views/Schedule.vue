<template>
  <div id="schedule" style="max-width: 1200px">
      <h1 class="title" data-aos="fade-up">Schedule</h1>
      <!-- <a class="TournamentLink" href="Tournaments">Sign up here</a> -->
      <Hyperlink
          class="tournament-link"
          asButton
          pulse
          :onClick="() => $router.push({ path: 'tournaments' })"
          >Sign up here
          </Hyperlink
        >
      <schedule></schedule>
  </div>
</template>

<script>
import Schedule from "@/components/Schedule";
import Hyperlink from "@/components/Hyperlink.vue"
export default {
    components: {
        Schedule,
        Hyperlink
    },
}
</script>

<style>
.title {
    margin-bottom: 2rem;
}
.tournament-link {
    margin-bottom: 2rem;
}
</style>