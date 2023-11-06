<script setup lang="ts" generic="T extends string | number">
import { computed } from 'vue';

const props = defineProps<{
  options: { value: T; label: string }[];
  placeholder?: string;
}>();

const value = defineModel<T | undefined>();

const selectedItem = computed(() => {
  return props.options.find((opt) => opt.value === value.value);
});

function onChange(e: Event) {
  const target = e.target as HTMLSelectElement;
  const selectedValue = target.value as T;
  value.value = selectedValue;
}
</script>

<template>
  <selectlist @change="onChange">
    <button type="selectlist" class="w-full h-full text-left">
      <span v-if="selectedItem" class="text-gray-800">
        {{ selectedItem.label }}
      </span>

      <span v-else class="text-gray-400">
        {{ placeholder || 'Select an option' }}
      </span>
    </button>

    <listbox class="rounded-md shadow-lg w-52 border border-gray-100">
      <option
        disabled
        value=""
        class="flex items-center px-2 py-2 rounded-lg cursor-not-allowed"
      >
        {{ placeholder || 'Select an option' }}
      </option>

      <option
        v-for="opt in options"
        :key="opt.value"
        :value="opt.value"
        class="flex items-center px-2 py-2 rounded-lg cursor-not-allowed bg-white"
      >
        {{ opt.label }}

        <svg
          v-if="opt.value === value"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17 12"
          class="text-blue-600 ml-2 w-3.5 h-3.5"
        >
          <path
            d="M16 1 6 11 1 6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </option>
    </listbox>
  </selectlist>
</template>
