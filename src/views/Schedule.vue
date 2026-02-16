<template>
  <div id="schedule" style="max-width: 1200px">
      <!-- <h1 class="title" data-aos="fade-up">Schedule</h1>
      <a class="TournamentLink" href="Tournaments">Sign up here</a>
      <Hyperlink
          class="tournament-link"
          asButton
          pulse
          :onClick="() => $router.push({ path: 'tournaments' })"
          >Sign up here
          </Hyperlink
        > -->
      <schedule></schedule>
  </div>
</template>

<!-- Tempoary "TBA" for schedule, remove this whole template when schedule has been setup -->
<template>
  <div class="schedule">
    <h1 class="title" data-aos="fade-up">Schedule</h1>
    <p data-aos="fade-up" data-aos-delay="200">
      The schedule for ITU LAN will be coming soon
    </p>
      <em
        ><h3 data-aos="fade-up" data-aos-delay="300">
          Schedule to be announced...
        </h3></em>
    </div>
</template>

<script>
import Schedule from "@/components/Schedule";
// import Hyperlink from "@/components/Hyperlink.vue"
export default {
    components: {
        Schedule,
        // Hyperlink
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