<template>
  <div class="rounded p-3 bg-light">
    <div class="text-center">{{ city }}</div>
    <div class="d-flex align-items-center justify-content-center">
      <div>{{ temp }}</div>
      <img :src="getUrl" />
    </div>
  </div>
</template>
<script>
import fetch from 'node-fetch';
export default {
  name: "Weather",
  data() {
    return {
      weather: {},
      temp: "",
      city: "",
    };
  },
  created() {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London&appid=0afc9703a9b908fb709ad9757c051615"
    )
      .then((response) => response.json())
      .then((data) => {
        this.weather = data.weather[0];
        let temp = Math.round(data.main.temp - 273, 15);
        this.temp = temp > 0 ? "+" + temp : temp;
        this.city = data.name;
      })
      .catch((error) => console.log(error));
  },
  computed: {
    getUrl() {
      return (
        this.weather.icon &&
        `http://openweathermap.org/img/wn/${this.weather.icon}@2x.png`
      );
    },
  },
};
</script>
