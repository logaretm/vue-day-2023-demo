<script setup lang="ts">
import { ref } from 'vue';
import InputCheckbox from '@/components/InputCheckbox.vue';
import InputText from '@/components/InputText.vue';
import InputSelect from '@/components/InputSelect.vue';
import BaseButton from '@/components/BaseButton.vue';
import { createLabel } from '@/utils';

const accountTypes = ['personal', 'business'] as const;

const accountTypeOptions = accountTypes.map((type) => ({
  value: type,
  label: createLabel(type),
}));

const values = ref<{
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  accountType?: string;
  terms?: boolean;
}>({});

const onSubmit = () => {
  console.log(values.value);
};
</script>

<template>
  <form @submit.prevent="onSubmit" novalidate>
    <InputText v-model="values.firstName" name="firstName" label="First name" />
    <InputText v-model="values.lastName" name="lastName" label="Last name" />
    <InputText v-model="values.email" name="email" label="Email" type="email" />
    <InputText
      v-model="values.password"
      name="password"
      label="Password"
      type="password"
    />

    <InputSelect
      v-model="values.accountType"
      name="accountType"
      label="Choose an account type"
      :options="accountTypeOptions"
    />

    <InputCheckbox
      v-model="values.terms"
      name="terms"
      label="I agree to terms and conditions"
    />

    <BaseButton>Submit</BaseButton>
  </form>
</template>
