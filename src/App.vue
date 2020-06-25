<template>
  <div id="app" class="d-flex justify-content-center">
    <div class="w-50 m-5">
      <HorizontalTabs
        :tabs="tabs"
        :activeTab="activeTab"
        @change="changeTab"
        class="w-100"
      />
      <div class="py-5 d-flex justify-content-center">
        <Employee
          v-if="activeTab === 'tab-employee' && isShowEmployee"
          @setSum="setSum"
        />
        <Employer
          v-if="activeTab === 'tab-employer' && isShowEmployer"
          @setSum="setSum"
        />
      </div>
    </div>
    <modal name="modal-result">
      <div class="d-flex justify-content-between p-5">
        <div>
          <h1 v-if="isSuccess" class="text-success">Success!</h1>
          <h1 v-else>Failure!</h1>
          <div class="mt-5">Maximum offer was: {{ employerSum }}</div>
          <div class="mt-2">Minimum salary was: {{ employeeSum }}</div>
        </div>
        <Weather class="m-3" />
      </div>
    </modal>
  </div>
</template>

<script>
import Weather from "@/components/Weather";
import HorizontalTabs from "@/components/HorizontalTabs";
import Employee from "@/views/Employee";
import Employer from "@/views/Employer";
export default {
  name: 'App',
  components: {
    Weather,
    HorizontalTabs,
    Employee,
    Employer,
  },
  data() {
    return {
      employerSum: null,
      employeeSum: null,
      isShowEmployee: true,
      isShowEmployer: true,
      tabs: [
        {
          key: "tab-employer",
          label: "Employer",
        },
        {
          key: "tab-employee",
          label: "Employee",
        },
      ],
      activeTab: "tab-employer",
    };
  },
  computed: {
    showModal() {
      return this.employerSum && this.employeeSum;
    },
    isSuccess() {
      return this.showModal && this.employerSum === this.employeeSum;
    },
  },
  watch: {
    showModal(newValue) {
      if (newValue) {
        this.$modal.show("modal-result");
      }
    },
  },
  methods: {
    changeTab(key) {
      this.activeTab = key;
    },
    setSum(key, value) {
      key === "employer"
        ? (this.employerSum = value)
        : (this.employeeSum = value);
      this.toogleShow(key);
    },
    toogleShow(key) {
      key === "employer"
        ? (this.isShowEmployer = false)
        : (this.isShowEmployee = false);
    },
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main";
</style>
