<template>
  <nav
    :class="this.visible === true ? 'h-48' : 'h-16'"
    class="w-screen justify-center bg-indigo-600 text-white px-5 py-3 shadow-2xl md:grid md:grid-cols-2 md:h-20 md:justify-around transition-[height] duration-300 overflow-hidden xl:items-center"
  >
    <div
      :class="{ line: this.visible }"
      class="h-12 flex w-full justify-between md:ml-5 md:w-52 md:justify-around"
    >
      <div class="w-10 grid content-l">
        <img src="../assets/logo.png" alt="logo" />
      </div>
      <div class="grid content-center">
        <h1 class="font-bold text-lg md:text-xl">Solve Equations</h1>
      </div>
      <div id="icon-menu" class="w-10 md:hidden" @click="sapnMenu">
        <img src="../assets/icons/menu.png" alt="logo" />
      </div>
    </div>
    <div class="w-full mt-6 grid justify-center md:hidden">
      <router-link
        @click="sapnMenu"
        :class="{ 'opacity-0': !this.visible }"
        class="navigation-link transition-opacity duration-200 ease-out"
        :to="{ name: 'EqSystemView' }"
      >
        Equations System
      </router-link>
      <router-link
        @click="sapnMenu"
        :class="{ 'opacity-0': !this.visible }"
        class="navigation-link transition-opacity duration-200 ease-out"
        :to="{ name: 'quadratic' }"
      >
        Quadratic Equation
      </router-link>
    </div>
    <div
      class="hidden md:grid md:grid-cols-2 lg:w-8/12 lg:justify-end xl:w-7/12"
    >
      <router-link class="navigation-link" :to="{ name: 'EqSystemView' }">
        Equations System
      </router-link>
      <router-link class="navigation-link" :to="{ name: 'quadratic' }">
        Quadratic Equation
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavComp",
  data: () => {
    return {
      visible: false,
    };
  },
  methods: {
    sapnMenu() {
      this.visible = !this.visible;
    },
  },
};
</script>
<style scoped>
a.router-link-exact-active {
  background-color: #3730a3;
  padding: 0.5rem;
  border-radius: 0.375rem;
  width: 10rem;
}

.line {
  border-bottom: 1px solid #3730a3;
  padding-bottom: 10px;
}
</style>
