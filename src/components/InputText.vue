<script setup lang="ts">
defineProps<{
  type?: string;
  name: string;
  label: string;
  successMessage?: string;
  placeholder?: string;
}>();

const value = defineModel<string>();
</script>

<template>
  <div class="TextInput">
    <label :for="name">{{ label }}</label>
    <input
      :name="name"
      :id="name"
      :type="type"
      v-model="value"
      :placeholder="placeholder"
    />
  </div>
</template>

<style scoped lang="postcss">
.TextInput {
  @apply relative w-full;
  margin-bottom: calc(1em * 1.5);

  label {
    @apply block mb-1 w-full;
  }

  input {
    @apply text-gray-800 rounded-md border-2 border-transparent py-3 px-4 w-full bg-gray-100 focus:outline-none transition-colors duration-200 focus:border-blue-500;
  }
  .help-message {
    @apply absolute left-0 text-sm text-red-500;
    bottom: calc(-1.5 * 1em);
  }

  &.has-error {
    input {
      @apply bg-red-100 text-red-600 focus:border-red-500;
    }

    .help-message {
      @apply text-red-500;
    }
  }
}
</style>
