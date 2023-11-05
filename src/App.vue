<script setup lang="ts">
import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import InputCheckbox from './components/InputCheckbox.vue';
import InputText from './components/InputText.vue';
import InputSelect from './components/InputSelect.vue';
import BaseButton from './components/BaseButton.vue';

const accountTypeOptions = [
  { value: 'personal', label: 'Personal' },
  { value: 'business', label: 'Business' },
];

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      firstName: z.string().nonempty('First name is required'),
      lastName: z.string().nonempty('Last name is required'),
      email: z.string().email('Invalid email').nonempty('Email is required'),
      password: z.string().min(8, 'Password must be at least 8 characters'),
      passwordConfirm: z.string().nonempty('Password confirmation is required'),
      accountType: z.string().nonempty('Account type is required'),
      terms: z.boolean().refine((val) => val, {
        message: 'You must agree to terms and conditions',
      }),
    })
  ),
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <form @submit="onSubmit">
    <InputText name="firstName" label="First name" />
    <InputText name="lastName" label="Last name" />
    <InputText name="email" label="Email" type="email" />
    <InputText name="password" label="Password" type="password" />
    <InputText
      name="passwordConfirm"
      label="Password confirmation"
      type="password"
    />

    <InputSelect
      name="accountType"
      label="Choose an account type"
      :options="accountTypeOptions"
    />

    <InputCheckbox name="terms" label="I agree to terms and conditions" />

    <BaseButton>Submit</BaseButton>
  </form>
</template>
