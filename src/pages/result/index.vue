<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const routeData = computed(() => {
  return route.query.search;
});

const isVisible = ref<boolean>(true);

const handleRouteChange = () => {
  setTimeout(() => {
    isVisible.value = !routeData.value;
  }, 400);
};

onMounted(() => {
  handleRouteChange();
});

watch(routeData, handleRouteChange);
</script>

<template>
  <div v-if="isVisible" class="w-full flex justify-center">
    <div class="absolute right-[20%] top-20 text-black text-4xl text-opacity-10 font-bold lg:text-[90px] lg:leading-[80px]">
      Fast <br />
      Service 
    </div>
    <CarIcon
      :class="{'car-animation': !route.query.search}"
      class="max-w-[240px] transition-all z-30 md:max-w-[400px]"
    />
    <RoadIcon class="absolute bottom-0 right-0" />
    <LineIcon class="absolute -bottom-20 lg:-bottom-10 xl:bottom-10 2xl:bottom-[10%]" />
  </div>
  <div v-else>
    kkk
  </div>
</template>

<style scoped>
.car-animation {
  animation: moveCar 2s linear infinite;
}

@keyframes moveCar {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px); /* Расстояние, на которое машина будет двигаться влево и вправо */
  }
}
</style>