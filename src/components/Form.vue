<template>
  <div>
    <div class="d-flex justify-content-center">
      <Input
        :label="label"
        :placeholder="placeholder"
        v-model="inputValue"
        :type="inputType"
        :error="error"
        @onSubmit="formSubmit"
      />
    </div>
    <button class="btn btn-primary mt-2" @click="formSubmit">Submit</button>
  </div>
</template>
<script>
import Input from "@/components/Input";
import { prop } from "@/utils/factories";
export default {
  name: "Form",
  props: {
    label: prop(String, ""),
    placeholder: prop(String, ""),
    inputType: prop(String, ""),
  },
  data() {
    return {
      inputValue: null,
      error: "",
    };
  },
  components: {
    Input,
  },
  methods: {
    formSubmit() {
      const numCount = this.inputValue && parseInt(this.inputValue);
      if (numCount && isFinite(numCount)) {
        this.$emit("onSubmit", numCount);
      } else {
        this.error = "Enter value";
      }
    },
  },
};
</script>
