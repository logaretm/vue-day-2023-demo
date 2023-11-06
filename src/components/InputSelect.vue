<script setup lang="ts" generic="T extends string | number">
import { computed } from 'vue';

const props = defineProps<{
  type?: string;
  name: string;
  label: string;
  placeholder?: string;
  options: { value: T; label: string }[];
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
  <div class="InputSelect">
    <label :for="name">{{ label }}</label>

    <selectlist
      class="InputSelect__Control"
      :name="name"
      :id="name"
      @change="onChange"
      @input="onChange"
    >
      <button type="selectlist" class="w-full h-full text-left py-3 px-4">
        <span v-if="selectedItem" class="text-gray-800">
          {{ selectedItem.label }}
        </span>

        <span v-else class="text-gray-400">
          {{ placeholder || 'Select an option' }}
        </span>
      </button>

      <listbox
        class="px-1 py-1 border border-gray-200 shadow-lg rounded-lg w-52"
      >
        <option
          disabled
          value=""
          class="flex items-center px-2 py-2 rounded-lg cursor-not-allowed bg-white"
        >
          {{ placeholder || 'Select an option' }}
        </option>

        <option
          v-for="opt in options"
          :key="opt.value"
          :value="opt.value"
          class="flex items-center px-2 py-2 rounded-lg hover:bg-gray-200 cursor-pointer"
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
  </div>
</template>

<style scoped lang="postcss">
.InputSelect {
  position: relative;
  margin-bottom: calc(1em * 1.5);
  width: 100%;

  label {
    display: block;
    margin-bottom: 4px;
    width: 100%;
  }

  &__Control {
    @apply text-gray-800 rounded-md border-2 border-transparent  w-full bg-gray-100 focus:outline-none transition-colors duration-200 focus:border-blue-500;

    &:open {
      @apply border-blue-500;
    }
  }

  .error-message {
    @apply absolute left-0 text-sm text-red-500;
    bottom: calc(-1.5 * 1em);
  }

  &.has-error {
    .InputSelect__Control {
      @apply bg-red-100 text-red-600 focus:border-red-500;
    }
  }
}
</style>
