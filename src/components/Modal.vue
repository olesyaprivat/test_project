
<template :name="name">
    <div><slot></slot></div>
</template>
<script>
import { prop } from "@/utils/factories";
export default {
  name: "Modal",
  props: {
    name: prop(String, ""),
  }
};
</script>
