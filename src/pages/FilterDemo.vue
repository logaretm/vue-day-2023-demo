<template>
  <form class="flex flex-col justify-center h-full w-full" @submit="onSubmit">
    <InputFilter
      name="filter"
      :operators="operatorsWithLabels"
      :filters="filtersWithLabels"
    />

    <BaseButton class="mr-auto mt-4">Submit</BaseButton>
  </form>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import InputFilter from '@/components/InputFilter.vue';
import { toTypedSchema } from '@vee-validate/zod';
import { snakeCase, upperFirst } from 'lodash-es';
import { useForm } from 'vee-validate';
import { z } from 'zod';

const operators = [
  'equals',
  'notEquals',
  'contains',
  'startsWith',
  'endsWith',
  'matches',
] as const;

const filters = [
  'name',
  'email',
  'phone',
  'address',
  'city',
  'state',
  'zip',
] as const;

function createLabel(value: string) {
  return snakeCase(value).split('_').join(' ');
}

const operatorsWithLabels = operators.map((operator) => ({
  value: operator,
  label: createLabel(operator),
}));

const filtersWithLabels = filters.map((filter) => ({
  value: filter,
  label: upperFirst(createLabel(filter)),
}));

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      filter: z.tuple([
        z.enum(filters),
        z.enum(operators),
        z.string().nonempty(),
      ]),
    })
  ),
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>
