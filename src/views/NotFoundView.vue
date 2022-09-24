<template>
  <div class="w-3/4 md:w-1/2 m-auto my-10 text-center">
    <h1 class="text-2xl text-gray-600 font-bold">Page not found!</h1>
    <div>
      <p class="text-gray-600 font-bold">
        Ir a
        <router-link
          class="text-indigo-600 font-bold hover:underline"
          :to="{ name: 'EqSystemView' }"
        >
          Home Page
        </router-link>
      </p>
    </div>
  </div>
</template>
