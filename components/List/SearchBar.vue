<template>
  <div class="relative max-w-lg">
    <label>
      <span class="sr-only">{{ placeholderText }}</span>
      <input
        :v-model="modelValue"
        :aria-label="placeholderText"
        type="text"
        :placeholder="placeholderText"
        class="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 focus:border-primary-500 focus:ring-primary-500"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </label>
    <svg
      class="absolute right-3 top-3 h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
</template>
<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholderText: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>
