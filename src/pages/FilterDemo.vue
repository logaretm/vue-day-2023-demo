<template>
  <div class="flex items-center justify-center h-full w-full">
    <InputFilter name="filter" :operators="operators" :filters="filters" />
  </div>
</template>

<script setup lang="ts">
import InputFilter from '@/components/InputFilter.vue';
import { LabeledValue } from '@/types';

const operators: LabeledValue<
  'eq' | 'neq' | 'contains' | 'startsWith' | 'endsWith' | 'matches'
>[] = [
  { label: 'Equals', value: 'eq' },
  { label: 'Not equals', value: 'neq' },
  { label: 'Contains', value: 'contains' },
  { label: 'Starts with', value: 'startsWith' },
  { label: 'Ends with', value: 'endsWith' },
  { label: 'Matches', value: 'matches' },
];

const filters: LabeledValue<
  'name' | 'email' | 'phone' | 'address' | 'city' | 'state' | 'zip'
>[] = [
  { label: 'Name', value: 'name' },
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'Address', value: 'address' },
  { label: 'City', value: 'city' },
  { label: 'State', value: 'state' },
  { label: 'Zip', value: 'zip' },
];
</script>
