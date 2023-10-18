<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { IDeliveryData } from '../../api/DTO';
import fetchDelivery from './../../api/repository/index'

const route = useRoute();
const isVisible = ref<boolean>(true);
const deliveryInfo = ref<IDeliveryData>();
const activeCardIndex = ref();

const toggleActiveCard = (index: number) => {
  activeCardIndex.value = index;
};

const routeData = computed(() => {
  return route.query.search;
});

const handleRouteChange = () => {
  setTimeout(() => {
    isVisible.value = !routeData.value;
  }, 400);
};

const fetchDeliveryInfo = (search: string) => {
  fetchDelivery(search)
    .then((res) => {
      deliveryInfo.value = res;
    })
    .catch((e) => {
      throw new Error(e);
    });
};

onBeforeMount(() => {
  handleRouteChange();
  fetchDeliveryInfo(routeData.value as string);
});

watch(routeData, handleRouteChange);

watch(routeData, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    fetchDeliveryInfo(newValue as string);
  }
});
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
  <div v-else class="w-full h-full flex flex-col gap-y-5">
    <DeliveryCard 
      v-for="(info, idx) in deliveryInfo" 
      :key="idx"
      :type="info.type"
      :available="info.available"
      :price="info.price"
      :isActive="idx === activeCardIndex"
      @toggle-active="toggleActiveCard(idx)"
      class="flex-1"
    />
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
    transform: translateX(20px);
  }
}
</style>