<script setup lang="ts">
import InputCheckbox from './components/InputCheckbox.vue';
import InputText from './components/InputText.vue';
import InputSelect from './components/InputSelect.vue';
import BaseButton from './components/BaseButton.vue';
import { ref } from 'vue';

const accountTypeOptions = [
  { value: 'personal', label: 'Personal' },
  { value: 'business', label: 'Business' },
];

const values = ref<{
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
  accountType?: string;
  terms?: boolean;
}>({});
</script>

<template>
  <form>
    <InputText v-model="values.firstName" name="firstName" label="First name" />
    <InputText v-model="values.lastName" name="lastName" label="Last name" />
    <InputText v-model="values.email" name="email" label="Email" type="email" />
    <InputText
      v-model="values.password"
      name="password"
      label="Password"
      type="password"
    />
    <InputText
      v-model="values.passwordConfirm"
      name="passwordConfirm"
      label="Password confirmation"
      type="password"
    />

    <InputSelect
      name="accountType"
      label="Choose an account type"
      v-model="values.accountType"
      :options="accountTypeOptions"
    />

    <InputCheckbox
      v-model="values.terms"
      name="terms"
      label="I agree to terms and conditions"
    />

    <BaseButton>Submit</BaseButton>

    <pre>{{ values }}</pre>
  </form>
</template>
