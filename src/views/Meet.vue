<template>
  <header class="Meet header container">
    <div class="content">
      <h1 data-aos="fade-right" data-aos-delay="100"> Meet n' greet </h1>  
      <h1
        data-aos="fade-left"
        data-aos-delay="150"
        id="season"
      >
          A very correct date 
      </h1>
      
      
    </div>
  </header>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
  text-align: center;
}

.header {
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-image: url(../assets/img/home/home_background.jpg);
  isolation: isolate;
  object-fit: cover;
  background-size: cover;
  min-height: 100vh;
}

.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--brand-white);
}

@media only screen and (max-width: 750px) {
  .content {
    padding-top: 4rem;
  }

  .header {
    height: initial;
    align-items: flex-end;
  }
}

@media only screen and (max-height: 850px) {
  .header {
    height: initial;
    align-items: flex-end;
  }
}

.content > * {
  max-width: 800px;
}

.header::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: rgba(3, 29, 69, 0.8);
}

.header > *:not(:first-child) {
  margin-top: 20px;
}

.button-container {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
}

@media only screen and (max-width: 600px) {
  .button-container {
    flex-direction: column;
  }
}

.button-container > button,
.button-container > a {
  display: block;
  margin: 15px auto;
  margin: 1rem;
}
#season {
  margin-top: 0;
}
h2 {
  margin-top: 2rem;
}
#emoji {
  font-size: 8rem;
  margin-top: 2rem;
} 
</style>
