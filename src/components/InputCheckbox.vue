<script lang="ts" setup>
defineProps<{
  name: string;
  label?: string;
  checkedValue?: any;
  uncheckedValue?: any;
}>();

const value = defineModel();
</script>

<template>
  <div class="InputCheckbox">
    <div class="InputCheckbox__Control">
      <input :id="name" :name="name" type="checkbox" tabindex="-1" />

      <button
        class="InputCheckbox__Control__btn"
        :class="{ 'bg-blue-600 border-blue-600': value }"
        type="button"
        @click="value = !value"
      >
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17 12"
          class="text-white w-3.5 h-3.5"
          :class="{ invisible: !value }"
        >
          <path
            d="M16 1 6 11 1 6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <slot name="label">
      <label
        v-if="label"
        :for="name"
        class="ml-2 block text-sm size-sm:text-xs text-gray-800 select-none"
      >
        {{ label }}
      </label>
    </slot>
  </div>
</template>

<style lang="postcss" scoped>
.InputCheckbox {
  @apply inline-flex items-center relative;
  padding-bottom: 1.5rem;

  &__Control {
    @apply w-5 h-5;

    input {
      @apply hidden;
    }

    &__btn {
      @apply w-5 h-5 border border-gray-200 rounded transition-colors duration-150 focus:outline-none text-white flex items-center justify-center focus:ring focus:ring-blue-600;
    }
  }

  &.has-error {
    .InputCheckbox__Control {
      input {
        @apply text-red-600 focus:ring-red-500 border-red-300;
      }
    }
  }

  &__Error {
    @apply absolute bottom-0 left-0 text-sm text-red-600;
  }
}
</style>
