<template>
  <div class="flex items-stretch h-full w-full">
    <div class="h-full bg-slate-800 px-3 flex flex-col justify-center gap-4">
      <RouterLink
        to="/"
        class="p-1 rounded-md hover:bg-black"
        title="Form intro"
      >
        <svg
          fill="none"
          class="w-7 h-7 text-emerald-500"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
          ></path>
        </svg>
      </RouterLink>

      <RouterLink
        to="/filters"
        class="p-1 rounded-md hover:bg-black"
        title="Filters component"
      >
        <svg
          class="w-7 h-7 text-emerald-500"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
          ></path>
        </svg>
      </RouterLink>

      <RouterLink
        to="/currency"
        class="p-1 rounded-md hover:bg-black"
        title="Currency component"
      >
        <svg
          class="w-7 h-7 text-emerald-500"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </RouterLink>
    </div>

    <div class="flex-grow flex-shrink p-10 overflow-auto">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped>
.router-link-active {
  @apply bg-black ring-1 ring-emerald-500;
}
</style>
