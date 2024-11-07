import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useAsyncState } from '@vueuse/core';
import { getPeople } from '../api';

export const usePeopleStore = defineStore('people', () => {
  // a wrapper that provides reactive variables that reflect the state of the call
  const { state, isLoading, isReady, error } = useAsyncState(
    getPeople(), // an actuall call
    [] // initial value of the reactive "state" variable
  );

  // reactive search value
  const query = ref('');

  // computed property
  const filteredResults = computed(() =>
    state.value.filter((p) =>
      p.name.toLocaleLowerCase().match(query.value.toLocaleLowerCase())
    )
  );
  // store's interface
  return { filteredResults, query, isLoading, isReady, error };
});
