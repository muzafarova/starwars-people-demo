<script setup lang="ts">
import PeopleListItem from './PeopleListItem.vue';
import { usePeopleStore } from '../store/people';

const peopleStore = usePeopleStore();
</script>

<template>
  <p v-if="peopleStore.isLoading" class="p-2 text-center w-full">Loading...</p>
  <p v-if="peopleStore.error" class="p-2 text-center w-full text-pink-600">
    Something went wrong :(
  </p>
  <table
    v-if="peopleStore.isReady"
    class="text-left w-full text-sm text-slate-800"
  >
    <thead class="sticky top-11 bg-white">
      <tr class="text-sm font-semibold border-b border-slate-500">
        <th class="p-2">Name</th>
        <th class="p-2">Home World</th>
        <th class="p-2">Created</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="person of peopleStore.filteredResults"
        :key="person.name"
        class="even:bg-white odd:bg-yellow-100"
      >
        <PeopleListItem
          :name="person.name"
          :homeworld="person.homeworld"
          :created="person.created"
        />
      </tr>
      <tr v-if="peopleStore.filteredResults.length === 0">
        <td colspan="3" class="text-center p-2 bg-yellow-100">No results</td>
      </tr>
    </tbody>
  </table>
</template>
