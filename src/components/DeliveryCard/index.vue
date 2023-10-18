<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  type: string;
  available: boolean;
  price: number;
  isActive: boolean;
}>()

const emit = defineEmits();

const formattedType = computed(() => {
  if (props.type === 'pickup') {
    return 'Pick Up'
  }

  return props.type;
})

const toggleCard = () => {
  emit('toggle-active');
};
</script>

<template>
  <button
    @click="toggleCard()"
    :disabled="!props.available"
    :class="{'shadow-input': props.isActive}"
    class="w-full flex flex-row self-stretch bg-white border border-[#E9F0EB] rounded-[22px] cursor-pointer overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed"
  >
    <div class="w-full h-full flex flex-row px-8 py-6">
      <div class="w-1/2 flex flex-col items-start">
        <div class="w-full flex flex-col items-start gap-y-1 text-mainDark text-2xl font-bold capitalize">
          {{ formattedType }}
          <span v-if="!props.available" class="text-start text-mainDark text-opacity-20 text-xl font-normal hyphens-auto">Not availible in that city</span>
        </div>
        <span class="mt-auto text-[#78A1BB] text-3xl font-bold">{{ props.price }}$</span>
      </div>
      <img v-if="props.type === 'pickup'" src="./../../assets/icons/pickup.svg" class="w-[90px] ml-auto xl:w-[110px]" />
      <img v-else-if="props.type === 'courier'" src="./../../assets/icons/small-car.svg" class="w-[90px] ml-auto xl:w-[110px]" />
      <img v-else-if="props.type === 'post'" src="./../../assets/icons/box.svg" class="w-[90px] ml-auto xl:w-[110px]" />
    </div>
    <div v-if="props.isActive && props.available" class="w-[16%] min-h-[160px] h-full flex justify-center items-center bg-activeGradient">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 20 20">
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
      </svg>
    </div>
  </button>
</template>