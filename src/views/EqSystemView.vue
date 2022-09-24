<template>
  <div class="mt-12 mb-3 lg:w-11/12 mx-auto lg:flex lg:h-fit">
    <FieldForm />
  </div>
</template>

<script>
// @ is an alias to /src
import FieldForm from "@/components/FieldForm.vue";
export default {
  name: "HomeView",
  components: { FieldForm },
};
</script>
