import { computed } from 'vue';
import { defineStore } from 'pinia';
import { useAsyncState } from '@vueuse/core';
import { getPlanets } from '../api';

export const usePlanetsStore = defineStore('planets', () => {
  // a wrapper that provides reactive variables that reflect the state of the call
  const { state, isLoading } = useAsyncState(
    getPlanets(), // an actuall call
    [] // initial value of the reactive "state" variable
  );

  // reactive getter
  const getPlanetNameByUrl = computed(() => (url: string) => {
    if (!state.value) {
      return '...';
    }
    if (isLoading.value) {
      return '...';
    }
    const planet = state.value.find((planet) => planet.url === url);
    return planet?.name;
  });

  // store's interface
  return { getPlanetNameByUrl };
});
