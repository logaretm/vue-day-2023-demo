<script setup lang="ts">
import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import InputCurrency from '@/components/InputCurrency.vue';
import { useForm } from 'vee-validate';
import BaseButton from '@/components/BaseButton.vue';

const schema = z.object({
  amount: z.number().max(1000).min(100),
});

const currencyOptions = {
  currency: 'USD',
};

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(schema),
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <form @submit="onSubmit">
    <InputCurrency label="Amount" name="amount" :options="currencyOptions" />

    <BaseButton>Submit</BaseButton>
  </form>
</template>
