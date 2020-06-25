<template>
  <Form label="Enter your minimum salary expectations" placeholder="0" type="number" @onSubmit="formSubmit"/>
</template>
<script>
import Form from "@/components/Form";
export default {
  name: "Employee",
  components: {
    Form,
  },
  methods: {
    formSubmit (valye) {
      this.$emit("setSum", "employee", valye);
    },
  },
};
</script>
