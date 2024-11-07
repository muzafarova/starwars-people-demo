<script setup lang="ts">
import { formatDate } from '../formatters';
import { usePlanetsStore } from '../store/planets';

defineProps<{
  name: string;
  homeworld: string;
  created: string;
}>();

const planetsStore = usePlanetsStore();
</script>

<template>
  <td class="p-2">
    <span class="font-semibold">{{ name }}</span>
  </td>
  <td class="p-2">{{ planetsStore.getPlanetNameByUrl(homeworld) }}</td>
  <td class="p-2">{{ formatDate(created) }}</td>
</template>
