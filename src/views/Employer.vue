<template>
  <Form label="Enter maximum offer" placeholder="0" type="number" @onSubmit="formSubmit"/>
</template>
<script>
import Form from "@/components/Form";
export default {
  name: "Employer",
  components: {
    Form,
  },
  methods: {
    formSubmit (valye) {
      this.$emit("setSum", "employer", valye);
    },
  },
};
</script>
