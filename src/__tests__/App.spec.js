import { mount } from "@vue/test-utils";
import App from "../App.vue";

const wrapper = mount(App);

describe("App", () => {
  it("changeTab valid work", () => {
    wrapper.vm.changeTab("tab-employee");
    expect(wrapper.vm.activeTab).toEqual("tab-employee");
  });
  it("setSum valid work", () => {
    wrapper.vm.setSum("employee", 100);
    expect(wrapper.vm.employeeSum).toEqual(100);
  });
  it("toogleShow valid work", () => {
    wrapper.vm.toogleShow("employee");
    expect(wrapper.vm.isShowEmployee).toEqual(false);
  });
  
});
