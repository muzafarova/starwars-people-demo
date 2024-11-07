<script setup lang="ts">
import PeopleList from './components/PeopleList.vue';
import PeopleSearchBar from './components/PeopleSearchBar.vue';
</script>

<template>
  <nav class="flex justify-between items-center p-2 bg-slate-900 sticky top-0">
    <h1 class="text-white font-bold tracking-wide">Demo</h1>
    <PeopleSearchBar />
  </nav>
  <header>
    <h1 class="px-2 py-8 text-xl font-bold tracking-wide">StarWars People</h1>
  </header>
  <main>
    <PeopleList />
  </main>
</template>
