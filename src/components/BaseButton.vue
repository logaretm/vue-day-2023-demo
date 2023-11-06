<template>
  <button><slot /></button>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
button {
  @apply flex items-center bg-blue-600 focus:outline-offset-2 focus:outline-dotted focus:outline-2 focus:outline-blue-500 border-none text-white text-sm px-4 py-2 rounded-md;
}
</style>
