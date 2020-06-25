<template>
  <div class="form-group">
    <label class="mr-2 d-block" for="inputID">{{ label }}</label>
    <input
      :id="inputID"
      :type="type"
      class="form-control"
      :class="{
        'is-invalid': error,
      }"
      :value="value"
      :placeholder="placeholder"
      :maxlength="maxlength"
      v-bind="$attrs"
      @input="handleInput"
      @change="handleChange"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
      @keydown.enter="handleSubmit"
    />
    <div v-if="error" class="text-danger small">{{ error }}</div>
  </div>
</template>

<script>
import { prop } from "@/utils/factories";
import { uniqueId } from "lodash";
export default {
  name: "Input",
  props: {
    error: prop(String, ""),
    label: prop(String, ""),
    id: prop(String, ""),
    placeholder: prop(String, ""),
    value: prop([String, Number], ''),
    type: prop(String, "number"),
    maxlength: prop(Number, 524288), // default value in html standard
  },

  computed: {
    inputID() {
      return `InputField_${this.id || uniqueId("id_")}`;
    },
  },

  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    handleChange(e) {
      this.$emit("change", e.target.value);
    },
    handleSubmit(e) {
      this.$emit("onSubmit", e.target.value);
    },
  },
};
</script>
