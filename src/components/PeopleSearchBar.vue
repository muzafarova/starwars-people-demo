<script setup lang="ts">
import { usePeopleStore } from '../store/people';
import BaseInput from './BaseInput.vue';

const peopleStore = usePeopleStore();
</script>

<template>
  <BaseInput
    type="search"
    v-model="peopleStore.query"
    placeholder="Search by name"
  />
</template>
