<template>
  <NavBar />
  <router-view />
</template>
<script>
import NavBar from "@/components/NavComp.vue";
export default {
  name: "app",
  components: {
    NavBar,
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
