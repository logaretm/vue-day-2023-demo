<script
  setup
  lang="ts"
  generic="TFilter extends string, TOperator extends string"
>
import { FilterValue, LabeledValue } from '@/types';
import UnstyledSelect from './UnstyledSelect.vue';
import { useField } from 'vee-validate';

const props = defineProps<{
  name: string;
  operators: LabeledValue<TOperator>[];
  filters: LabeledValue<TFilter>[];
}>();

const { value } = useField<
  FilterValue<TFilter | undefined, TOperator | undefined>
>(() => props.name, undefined, {
  initialValue: [undefined, undefined, undefined],
});
</script>

<template>
  <div
    class="flex items-stretch bg-gray-100 divide-x divide-gray-200 h-10 rounded-md border border-gray-200 focus-within:border-blue-500 overflow-hidden"
  >
    <UnstyledSelect
      v-model="value[0]"
      :options="filters"
      placeholder="Select filter"
      class="hover:bg-gray-200 px-4 flex-shrink-0"
    />

    <UnstyledSelect
      v-model="value[1]"
      :options="operators"
      class="px-4 hover:bg-gray-200 flex-shrink-0"
      placeholder="Select operator"
    />

    <input
      type="text"
      v-model="value[2]"
      class="bg-transparent text-sm px-4 focus:outline-none hover:bg-gray-200 w-full flex-grow"
      placeholder="Enter value"
    />
  </div>
</template>
