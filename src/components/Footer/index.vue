<script setup lang="ts">
import { computed } from 'vue';

const getYear = computed(() => {
  return new Date().getFullYear();
})
</script>

<template>
  <footer class="flex flex-wrap justify-between gap-6 mt-auto py-7 px-5 lg:px-0">
    <div class="text-mainDark text-sm font-normal text-opacity-50">
      All rights reserved<br />
      Fast service {{ getYear }}
    </div>
    <div class="w-fit flex flex-row items-center gap-x-2.5 select-none">
      <img src="./../../assets/icons/visa.svg" alt="Visa" class="w-10">
      <img src="./../../assets/icons/mastercard.svg" alt="">
      <img src="./../../assets/icons/maestro.svg" alt="">
      <img src="./../../assets/icons/processing.svg" alt="">
    </div>
  </footer>
</template>