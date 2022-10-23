<template>
  <div class="mt-12 mb-3 lg:w-11/12 mx-auto lg:flex lg:h-fit">
    <FieldFormQ />
  </div>
</template>

<script>
// @ is an alias to /src
import FieldFormQ from "@/components/FieldFormQEq.vue";
export default {
  name: "HomeView",
  components: { FieldFormQ },
};
</script>
