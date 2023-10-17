<script setup lang="ts">
import Footer from './components/Footer/index.vue'
import Header from './components/Header/index.vue'
</script>

<template>
  <div class="min-h-[100dvh] flex flex-col sm:flex-row">
    <div class="w-full bg-white sm:w-1/2">
      <div class="max-w-[80%] h-full flex flex-col mx-auto">
        <Header />

        <Footer class="hidden sm:flex" />
      </div>
    </div>
    <div class="bg-secondBg ounded-t-[40px] sm:rounded-l-[40px] sm:w-1/2">
      <RouterView />
    </div>
    <Footer class="sm:hidden" />
  </div>
</template>