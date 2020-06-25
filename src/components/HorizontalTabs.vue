<template>
  <ul class="nav nav-tabs">
    <template v-for="tab in tabs">
      <li
        :key="`horizontal-tab-${tab.key}`"
        @click="$emit('change', tab.key)"
        class="nav-item mr-3"
      >
        <span
          v-if="tab.label"
          class="nav-link"
          :class="{
            active: activeTab === tab.key,
          }"
          >{{ tab.label }}</span
        >
      </li>
    </template>
  </ul>
</template>
<script>
import { prop, propRequired } from "@/utils/factories";
export default {
  name: "HorizontalTabs",
  props: {
    tabs: propRequired(Array),
    activeTab: prop(String),
  },
};
</script>
