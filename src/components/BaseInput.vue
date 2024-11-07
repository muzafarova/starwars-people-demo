<script setup lang="ts">
defineProps<{ modelValue?: string }>();
defineEmits<{
  'update:modelValue': [value: string];
}>();
</script>

<template>
  <input
    :modelValue="modelValue"
    class="rounded bg-yellow-100 w-96 px-2 py-1 text-sm text-black focus:ring focus:ring-2 focus:ring-blue-400 focus:outline-0"
    @input.lazy="(e) => $emit('update:modelValue', (e.target as HTMLInputElement).value)"
  />
</template>
