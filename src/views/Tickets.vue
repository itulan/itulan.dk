<template>
  <div class="tickets">
    <h1 class="title" data-aos="fade-up">{{ $t("tickets.title") }}</h1>
    <Hyperlink id="ticket-link" newTab :url="$t('common.ticketUrl')">
      <TextCircle
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="1250"
        radius="180px"
        font-size="2rem"
        >{{ $t("tickets.title") }}</TextCircle
      >
    </Hyperlink>
    <small style="display:block; margin-bottom: 2rem;" ><i><strong>Sleeping is not allowed at ITU.</strong></i></small>
    <div id="step-one" data-aos="fade-up" data-aos-delay="200">
      <span class="step-header">
        <h3>{{ $t("tickets.steps.findSeat.title") }}</h3>
      </span>
      <p>{{ $t("tickets.steps.findSeat.text") }}</p>
      <div class="floor-wrapper">
        <img
          width="100%"
          id="floor-4"
          src="../assets/img/tickets/floors/4_floor.png"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-anchor="#step-one"
          alt="ITU 4th floor"
          loading="lazy"
        />
        <img
          width="100%"
          id="floor-3"
          src="../assets/img/tickets/floors/3_floor.png"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor="#step-one"
          alt="ITU 3rd floor"
          loading="lazy"
        />
        <img
          width="100%"
          id="floor-2"
          src="../assets/img/tickets/floors/2_floor.png"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-anchor="#step-one"
          alt="ITU 2nd floor"
          loading="lazy"
        />
      </div>
    </div>
    <div class="flex-wrapper">
      <div id="step-two">
        <span class="step-header">
          <h3>{{ $t("tickets.steps.buyTicket.title") }}</h3>
        </span>
        <p>
          <Hyperlink id="inline-link" :url="$t('common.ticketUrl')">{{
            $t("tickets.steps.buyTicket.text")
          }}</Hyperlink>
        </p>
      </div>
      <div id="step-three">
        <span class="step-header">
          <h3>{{ $t("tickets.steps.checkin.title") }}</h3>
        </span>
        <p>{{ $t("tickets.steps.checkin.text") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TextCircle from "@/components/Circle";
import Hyperlink from "@/components/Hyperlink";
export default {
  components: {
    TextCircle,
    Hyperlink,
  },
};
</script>

<style scoped>
#ticket-link {
  position: absolute;
  top: 10%;
  right: 5%;
  transform: scale(0.8);
}

#ticket-link {
  color: inherit !important;
}

#ticket-link:hover {
  color: inherit !important;
  text-decoration: none !important;
}

.tickets h3 {
  display: inline;
  letter-spacing: 2px;
}

.tickets h3::after {
  content: " ";
}

.tickets p {
  margin-top: 1rem;
}

.title {
  margin: 0 auto;
  padding-bottom: 25px;
  display: block;
}

.step-header {
  margin-bottom: 1rem !important;
}

.steps {
  margin-bottom: 4rem;
  position: relative;
}

.flex-wrapper {
  display: flex;
  justify-content: space-evenly;
}

.flex-wrapper > div {
  flex-basis: 100%;
}

#step-one {
  margin-bottom: 4rem;
}

.floor-wrapper {
  position: relative;
}

.floor-wrapper > img:not(:first-child) {
  margin-top: -20%;
}

@media only screen and (max-width: 992px) {
  #ticket-link {
    top: initial;
    right: initial;
    display: inline-block;
    position: relative;
    margin-bottom: 2rem;
  }
}

@media only screen and (max-width: 600px) {
  .tickets h3 {
    letter-spacing: 1px;
  }

  .steps {
    margin-bottom: 3rem;
  }

  .steps h3 {
    font-size: 1.3rem;
  }

  #ticket-link {
    margin-bottom: 0rem;
  }

  .flex-wrapper {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
  }

  .flex-wrapper > div {
    flex-basis: 100%;
  }

  #step-one,
  #step-two {
    margin-bottom: 2rem;
  }
}
</style>
