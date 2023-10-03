<template>
  <div id="app">
    <Navbar></Navbar>
    <main>
      <RouterView class="router-view" />
    </main>
    <FooterCustom />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import FooterCustom from "@/components/FooterCustom";
export default {
  components: {
    Navbar,
    FooterCustom,
  },
};
</script>

<style>
.router-view:not(.home) {
  max-width: 800px;
  margin: 150px auto;
  text-align: center;
}

@media only screen and (max-width: 750px) {
  .router-view:not(.home) {
    padding: 15px;
    margin: 80px auto;
  }
}
</style>
