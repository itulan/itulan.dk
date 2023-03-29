<template>
  <div class="flex wrapper">
    <div id="friday" class="flex day">
      <div>
        <h3 class="weekday">Friday</h3>
      </div>
      <div class="flex schedule">
        <div>
          <span class="time">16.00</span>
          <span>Check-in</span>
        </div>
        <div>
          <span class="time">17.00</span>
          <span>Magic the Gathering</span>
          <small>~6 hours</small>
        </div>
        <div>
          <span class="time">17.00</span>
          <span>Mario Kart</span>
          <small>~4 hours</small>
        </div>
        <div>
          <span class="time">17.00</span>
          <span>Novo Fruit Ninja </span>
          <small>~3 hours</small>
        </div>
        <div>
          <span class="time">19.00</span>
          <span>Victoria 3</span>
          <small>~4 hours</small>
        </div>
        <div>
          <span class="time">20.00</span>
          <span>Valorant </span>
          <small>~4 hours</small>
        </div>
        <div>
          <span class="time">20.00</span>
          <span>Novo Foosball </span>
          <small>~2 hours</small>
        </div>
      </div>
    </div>
    <div id="saturday" class="flex day">
      <div>
        <h3 class="weekday">Saturday</h3>
      </div>
      <div class="flex schedule">
        <!-- <div>
          <span class="time">10.00</span>
          <span>Escape Room</span>
          <small>~14 hours</small>
        </div> -->
        <div>
          <span class="time">12.00</span>
          <span>League of Legends</span>
          <small>~8 hours</small>
        </div>
        <div>
          <span class="time">12.00</span>
          <span>Redbull Doodle art competition</span>
          <small>~4 hours</small>
        </div>
        <div>
          <span class="time">14.00</span>
          <span>Just Dance 2022</span>
          <small>~2 hours</small>
        </div>
        <div>
          <span class="time">19.00</span>
          <span>Victoria 3</span>
          <small>~4 hours</small>
        </div>
        
        <div>
          <span class="time">20.00</span>
          <span>Smash Bros</span>
          <small>~3 hours</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}

.flex.day {
  flex-direction: row;
}

.flex.wrapper {
  flex-grow: 1;
  flex-basis: 0;
  max-width: 1100px;
  margin: 0 auto;
}

.flex.wrapper > div {
  width: 100%;
}

.flex.schedule {
  flex-direction: column;
  text-align: left;
}

.time {
  margin-right: 20px;
}

.flex.schedule span {
  font-family: Anton, Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  line-height: 30px;
  text-transform: uppercase;
}

small {
  margin-left: 10px;
}

.weekday {
  writing-mode: vertical-lr;
  text-orientation: sideways-right;
  transform: rotate(-180deg);
  margin-top: 0px;
}

@media only screen and (max-width: 1200px) {
  .flex.schedule span {
    font-size: 1rem;
    line-height: 20px;
  }
}

@media only screen and (max-width: 995px) {
  .flex.wrapper {
    flex-direction: column;
    max-width: 70%;
  }
}

@media only screen and (max-width: 770px) {
  .flex.wrapper {
    max-width: 95%;
  }
}

@media only screen and (max-width: 505px) {
  .flex.day {
    flex-direction: column;
  }

  .weekday {
    writing-mode: initial;
    text-orientation: initial;
    transform: initial;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: left;
  }
}

@media only screen and (max-width: 405px) {
  .flex.schedule span {
    line-height: initial;
  }
}
</style>